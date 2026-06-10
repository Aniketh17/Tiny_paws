import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { products } from '../data/products';

const categories = ['dogs', 'cats'];
const subFilters = [
  { key: 'all', label: 'All' },
  { key: 'nutrition', label: 'Nutrition' },
  { key: 'toys', label: 'Toys' },
  { key: 'health', label: 'Health' },
  { key: 'grooming', label: 'Grooming' },
];

export default function Store() {
  const { addToCart, updateCartQuantity } = useAppContext();
  const [activeSpecies, setActiveSpecies] = useState('dogs');
  const [activeSub, setActiveSub] = useState('all');
  const [addingId, setAddingId] = useState(null);

  const filteredProducts = products.filter((prod) => {
    const speciesMatch = prod.category === activeSpecies;
    const subMatch = activeSub === 'all' || prod.subCategory === activeSub;
    return speciesMatch && subMatch;
  });

  const handleAddToCart = (e, prod) => {
    e.preventDefault();
    e.stopPropagation();
    setAddingId(prod.id);
    addToCart(prod, 1);
    setTimeout(() => {
      setAddingId(null);
    }, 1200);
  };

  return (
    <main className="max-w-container-max mx-auto px-gutter py-stack-lg" style={{ paddingTop: '120px' }}>
      {/* Back to Home Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '24px' }}>
        <Link to="/" className="font-label-md text-on-surface-variant hover:text-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
          Back to Home
        </Link>
      </div>

      {/* Header Section */}
      <div className="store-header text-center mb-stack-lg" style={{ textAlign: 'center', marginBottom: 'var(--stack-lg)' }}>
        <h1 className="font-display-lg text-display-lg text-primary mb-4" style={{ margin: '0 0 16px 0' }}>
          The Premium Pet Store
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto" style={{ margin: '0 auto', maxWidth: '42rem' }}>
          Elevating the lives of your companions with curated essentials designed for comfort, health, and joy.
        </p>
      </div>

      {/* Species Toggle */}
      <div className="flex justify-center mb-stack-md" style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--stack-md)' }}>
        <div
          className="bg-surface-container-low p-1.5 rounded-full flex items-center shadow-inner border border-outline-variant/30"
          style={{
            backgroundColor: 'var(--surface-container-low)',
            padding: '6px',
            borderRadius: 'var(--radius-full)',
            display: 'inline-flex',
            alignItems: 'center',
            border: '1px solid rgba(112, 121, 119, 0.2)',
          }}
        >
          <button
            className={`px-8 py-2.5 rounded-full font-label-md text-label-md transition-all gentle-spring ${
              activeSpecies === 'dogs'
                ? 'bg-primary text-on-primary shadow-lg'
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
            onClick={() => {
              setActiveSpecies('dogs');
              setActiveSub('all');
            }}
            style={{
              padding: '10px 32px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: activeSpecies === 'dogs' ? 'var(--primary)' : 'transparent',
              color: activeSpecies === 'dogs' ? 'var(--on-primary)' : 'var(--on-surface-variant)',
            }}
          >
            Dogs
          </button>
          <button
            className={`px-8 py-2.5 rounded-full font-label-md text-label-md transition-all gentle-spring ${
              activeSpecies === 'cats'
                ? 'bg-primary text-on-primary shadow-lg'
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
            onClick={() => {
              setActiveSpecies('cats');
              setActiveSub('all');
            }}
            style={{
              padding: '10px 32px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: activeSpecies === 'cats' ? 'var(--primary)' : 'transparent',
              color: activeSpecies === 'cats' ? 'var(--on-primary)' : 'var(--on-surface-variant)',
            }}
          >
            Cats
          </button>
        </div>
      </div>

      {/* Subcategory Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-stack-lg" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: 'var(--stack-lg)' }}>
        {subFilters.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveSub(tab.key)}
            className={`px-6 py-2 rounded-full border font-label-md text-label-md transition-all ${
              activeSub === tab.key
                ? 'border-primary bg-primary text-on-primary'
                : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'
            }`}
            style={{
              padding: '8px 24px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid',
              borderColor: activeSub === tab.key ? 'var(--primary)' : 'var(--outline-variant)',
              backgroundColor: activeSub === tab.key ? 'var(--primary)' : 'transparent',
              color: activeSub === tab.key ? 'var(--on-primary)' : 'var(--on-surface-variant)',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="products-grid">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((prod) => (
            <motion.div
              key={prod.id}
              className="product-card"
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/product/${prod.id}`} className="product-img-wrap">
                <img
                  className="product-img"
                  alt={prod.name}
                  src={prod.image}
                />
                {prod.tag && (
                  <span className="product-badge">
                    {prod.tag}
                  </span>
                )}
              </Link>
              <div className="product-body">
                <p className="product-meta">
                  {prod.subCategory}
                </p>
                <Link to={`/product/${prod.id}`}>
                  <h3 className="product-name">
                    {prod.name}
                  </h3>
                </Link>
                <div className="product-footer">
                  <span className="product-price">
                    ${prod.price.toFixed(2)}
                  </span>
                  <motion.button
                    className="bg-secondary-container text-on-secondary-container p-2 rounded-lg hover:bg-primary hover:text-on-primary transition-colors gentle-spring"
                    onClick={(e) => handleAddToCart(e, prod)}
                    whileTap={{ scale: 0.9 }}
                    animate={addingId === prod.id ? {
                      backgroundColor: 'var(--primary)',
                      color: 'var(--on-primary)',
                      scale: [1, 1.15, 0.9, 1.05, 1],
                    } : {}}
                    transition={{ duration: 0.4 }}
                    style={{
                      backgroundColor: addingId === prod.id ? 'var(--primary)' : 'var(--secondary-container)',
                      color: addingId === prod.id ? 'var(--on-primary)' : 'var(--on-secondary-container)',
                      padding: '8px',
                      borderRadius: 'var(--radius-default)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span className="material-symbols-outlined">
                      {addingId === prod.id ? 'check' : 'add_shopping_cart'}
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProducts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--on-surface-variant)' }}>
          No premium products found under this category selection.
        </div>
      )}
    </main>
  );
}
