import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useAppContext } from '../context/AppContext';

export default function Store() {
  const { addToCart } = useAppContext();
  const [species, setSpecies] = useState('dogs'); // 'dogs' or 'cats'
  const [subCategory, setSubCategory] = useState('all'); // 'all', 'food', 'toys'

  const filteredProducts = products.filter(p => {
    return p.category === species && (subCategory === 'all' || p.subCategory === subCategory);
  });

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Premium Pet Store</h1>
        
        {/* Species Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
          <button 
            className={`btn ${species === 'dogs' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => { setSpecies('dogs'); setSubCategory('all'); }}
          >
            Dogs
          </button>
          <button 
            className={`btn ${species === 'cats' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => { setSpecies('cats'); setSubCategory('all'); }}
          >
            Cats
          </button>
        </div>

        {/* Subcategory Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          {['all', 'food', 'toys'].map(sub => (
            <span 
              key={sub}
              onClick={() => setSubCategory(sub)}
              style={{ 
                cursor: 'pointer', 
                textTransform: 'capitalize', 
                fontWeight: subCategory === sub ? 700 : 400,
                color: subCategory === sub ? 'var(--primary)' : 'var(--text-muted)',
                borderBottom: subCategory === sub ? '2px solid var(--primary)' : 'none',
                paddingBottom: '4px'
              }}
            >
              {sub}
            </span>
          ))}
        </div>
      </div>

      <motion.div layout className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
        <AnimatePresence>
          {filteredProducts.map(prod => (
            <motion.div 
              key={prod.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              transition={{ duration: 0.2 }}
              style={{ background: 'var(--surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
            >
              <Link to={`/product/${prod.id}`}>
                <img src={prod.image} alt={prod.name} style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '1px solid var(--border)' }} />
              </Link>
              <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Link to={`/product/${prod.id}`} style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '10px', fontFamily: 'Outfit' }}>
                  {prod.name}
                </Link>
                <div style={{ color: 'var(--primary)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>
                  ${prod.price.toFixed(2)}
                </div>
                <button 
                  className="btn btn-primary" 
                  style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', padding: '14px', fontSize: '1.1rem' }}
                  onClick={() => addToCart(prod)}
                >
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {filteredProducts.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
            No products found for this category.
          </div>
        )}
      </motion.div>
    </div>
  );
}
