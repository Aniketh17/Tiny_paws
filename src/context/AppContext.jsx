import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Cart State
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('tinyPawsCart');
    return saved ? JSON.parse(saved) : {};
  });

  // Pet Profiles State
  const [pets, setPets] = useState(() => {
    const saved = localStorage.getItem('tinyPawsPets');
    return saved ? JSON.parse(saved) : [];
  });

  // Document Vault State
  const [documents, setDocuments] = useState(() => {
    const saved = localStorage.getItem('tinyPawsDocs');
    return saved ? JSON.parse(saved) : [];
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('tinyPawsCart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('tinyPawsPets', JSON.stringify(pets));
  }, [pets]);

  useEffect(() => {
    localStorage.setItem('tinyPawsDocs', JSON.stringify(documents));
  }, [documents]);

  // Cart Actions
  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev[product.id];
      if (existing) {
        return { ...prev, [product.id]: { ...existing, quantity: existing.quantity + quantity } };
      }
      return { ...prev, [product.id]: { ...product, quantity } };
    });
  };

  const updateCartQuantity = (productId, delta) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId]) {
        newCart[productId].quantity += delta;
        if (newCart[productId].quantity <= 0) {
          delete newCart[productId];
        }
      }
      return newCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const cartItemsCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

  // Pet Actions
  const addPet = (petData) => {
    setPets(prev => [...prev, { ...petData, id: uuidv4() }]);
  };

  const removePet = (id) => {
    setPets(prev => prev.filter(p => p.id !== id));
    // Also cleanup docs associated with this pet
    setDocuments(prev => prev.filter(d => d.petId !== id));
  };

  // Document Actions
  const addDocument = (docData) => {
    setDocuments(prev => [...prev, { ...docData, id: uuidv4(), date: new Date().toISOString() }]);
  };

  const removeDocument = (id) => {
    setDocuments(prev => prev.filter(d => d.id !== id));
  };

  return (
    <AppContext.Provider value={{
      cart, addToCart, updateCartQuantity, clearCart, cartItemsCount,
      pets, addPet, removePet,
      documents, addDocument, removeDocument
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
