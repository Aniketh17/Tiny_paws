import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useAppContext } from '../context/AppContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useAppContext();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}><h2>Product not found</h2><Link to="/store">Back to Store</Link></div>;
  }

  const averageRating = product.reviews && product.reviews.length > 0 
    ? (product.reviews.reduce((acc, rev) => acc + rev.rating, 0) / product.reviews.length).toFixed(1)
    : 0;

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <Link to="/store" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', marginBottom: '20px' }}>
        <ArrowLeft size={18} /> Back to Store
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          style={{ background: 'var(--surface)', padding: '20px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}
        >
          <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
        </motion.div>

        {/* Product Info */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{product.name}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', color: '#FACC15' }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={18} fill={i <= Math.round(averageRating) ? "currentColor" : "none"} />)}
            </div>
            <span className="text-muted">({averageRating} from {product.reviews.length} reviews)</span>
          </div>

          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '24px' }}>
            ${product.price.toFixed(2)}
          </div>

          <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.8 }}>
            {product.description}
          </p>

          <button 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '16px', fontSize: '1.2rem', display: 'flex', justifyContent: 'center', gap: '10px' }}
            onClick={() => addToCart(product)}
          >
            <ShoppingCart /> Add to Cart
          </button>

          {/* Additional Info toggles can go here */}
          <div style={{ marginTop: '40px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
            <h3 style={{ marginBottom: '10px' }}>Features</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--text-muted)' }}>
              <li>Premium quality ingredients/materials</li>
              <li>Veterinarian approved</li>
              <li>100% satisfaction guarantee</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Reviews Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: '80px' }}>
        <h2 style={{ marginBottom: '30px' }}>Customer Reviews</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {product.reviews.map(rev => (
            <div key={rev.id} style={{ background: 'var(--surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <strong style={{ fontSize: '1.1rem' }}>{rev.user}</strong>
                <div style={{ display: 'flex', color: '#FACC15' }}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill={i <= rev.rating ? "currentColor" : "none"} />)}
                </div>
              </div>
              <p className="text-muted">"{rev.comment}"</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
