import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AppContext = createContext();

export function AppProvider({ children }) {
  // ── Cart ──
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('tp_cart') || '{}'); }
    catch { return {}; }
  });

  // ── Pets ──
  const [pets, setPets] = useState(() => {
    try {
      const stored = localStorage.getItem('tp_pets');
      if (stored) return JSON.parse(stored);
      const defaults = [
        {
          id: 'max-id',
          name: 'Max',
          species: 'Dog',
          breed: 'Golden Retriever',
          vaccinationDate: '2024-10-12',
          nextCheckup: '2024-10-12',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBytePVsbSW9T-QdmL4jiOSxqxiyY2Eorp4mYdgfHzp6ido2Hjbg7K7brTfmxWXEeoFom_siwQNb97npNHGzuwXlQa31NKd4DcJzu3FFGrbnH9wloZCAv9a7yb9s0LSuwNGZsXkExe9IZWaO6tvEQ21d9xY2dAB8Mh8bItMeiEQ-_tQFoZcHWkMQlRLKsvNJGG6MUbjR_o6ctHqvgjbDfMXsSkSepvf35pOoMexxjF3-VMS_fbs0o5uqPuiPIN-NNElhL3af5OPpik'
        },
        {
          id: 'luna-id',
          name: 'Luna',
          species: 'Cat',
          breed: 'Siamese Cat',
          vaccinationDate: '2024-12-05',
          nextCheckup: '2024-12-05',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgWTmTGmOn9NPZrN0KS9vgV-iZAxrarE0I4O5FcwnXas5jHZ2tg5lyYqHjGeIg5iluDnQg7T-kVL8waZTQKR9Xyh8QaNP2_P8jtGIexMa2V0zHtCpW1X8gsHvgmIEDDo-ML4KMRwwNylPbQKxUsATMhPlsMlstvCNfZsP8AjB0VFksp-vfzunwULktwftWqo7L24rJBGK7hmjPez-A_Ww2ykJZwto20K14hQWjp3i5fcA2h65oQJIgawnJosRmlwgL-24SxlCmJz8'
        }
      ];
      localStorage.setItem('tp_pets', JSON.stringify(defaults));
      return defaults;
    }
    catch { return []; }
  });

  // ── Documents ──
  const [documents, setDocuments] = useState(() => {
    try {
      const stored = localStorage.getItem('tp_docs');
      if (stored) return JSON.parse(stored);
      const defaults = [
        { id: 'doc-1', petId: 'max-id', fileName: 'Vaccination_Record_2024.pdf', date: '2024-09-12T10:00:00.000Z', fileType: 'pdf' },
        { id: 'doc-2', petId: 'luna-id', fileName: 'Annual_Checkup_Luna.pdf', date: '2024-08-28T10:00:00.000Z', fileType: 'pdf' },
        { id: 'doc-3', petId: 'max-id', fileName: 'Dental_Report_Q3.docx', date: '2024-07-15T10:00:00.000Z', fileType: 'docx' }
      ];
      localStorage.setItem('tp_docs', JSON.stringify(defaults));
      return defaults;
    }
    catch { return []; }
  });

  // Persist to localStorage
  useEffect(() => { localStorage.setItem('tp_cart', JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem('tp_pets', JSON.stringify(pets)); }, [pets]);
  useEffect(() => { localStorage.setItem('tp_docs', JSON.stringify(documents)); }, [documents]);

  // ── Cart Actions ──
  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev[product.id];
      return existing
        ? { ...prev, [product.id]: { ...existing, quantity: existing.quantity + quantity } }
        : { ...prev, [product.id]: { ...product, quantity } };
    });
  };

  const updateCartQuantity = (productId, delta) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId]) {
        newCart[productId] = { ...newCart[productId], quantity: newCart[productId].quantity + delta };
        if (newCart[productId].quantity <= 0) delete newCart[productId];
      }
      return newCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => { const n = { ...prev }; delete n[productId]; return n; });
  };

  const clearCart = () => setCart({});

  const cartItems = Object.values(cart);
  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // ── Pet Actions ──
  const addPet = (petData) => {
    setPets(prev => [...prev, { ...petData, id: uuidv4() }]);
  };
  const removePet = (id) => {
    setPets(prev => prev.filter(p => p.id !== id));
    setDocuments(prev => prev.filter(d => d.petId !== id));
  };

  // ── Document Actions ──
  const addDocument = (docData) => {
    setDocuments(prev => [...prev, { ...docData, id: uuidv4(), date: new Date().toISOString() }]);
  };
  const removeDocument = (id) => {
    setDocuments(prev => prev.filter(d => d.id !== id));
  };

  return (
    <AppContext.Provider value={{
      cart, cartItems, cartItemsCount, cartTotal,
      addToCart, updateCartQuantity, removeFromCart, clearCart,
      pets, addPet, removePet,
      documents, addDocument, removeDocument,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
