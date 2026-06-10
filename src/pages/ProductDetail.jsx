import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useAppContext();
  const [quantity, setQuantity] = useState(1);

  // Find the product
  const product = products.find(p => p.id === id) || products[0];

  // Specific high-fidelity gallery images for Artisanal Feast Kibble (d1)
  const defaultGallery = [
    product.image,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAJbCgIF6JqqkxJyNS-XyYSpHIc4ecSkhTZ42h3GpTPX0zW4bQoOsHVUR9JUHVsopK1MPH3BVzHwmUXNbTIICb2UEgEeLNjbYdRF6aRmxW5t6nwvm0YkllW5Ahg8mMSUwreTJMVmaiA9XBjdPpiBBs1tkj-fG2qH3_NphQlR6RJRC7VoFWgDbYCNVbndZMDiH6IaBJNtQEI0tbS_GhoqdzzJjaQVist3brT-i0opH71G11t7S90Re350zROkSMfwv_xX4kBNnrzBbI',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBcCug6BoKVPpsgAk_O0MAuTWKfUO04ZOoeCcztGKkf35M6ZSPZFGk6FM758_Xo0OYMzkDdKvdIixlxGX3lugjq_M5eZVQw09Z5hOkIDwoAwgwWoGvZp-9N6-dTvEo-3d3LR3X2TB_PWrGl_dvwbt_Y2xV-R9Q9Z8qOUngtzDvj0b6DhyUFBbabbRJ5Zeis6NGih-bPOrYmIYC0vbDPYS_8KykNrqDR_-vi4Cx6zLdKNcdZ_uJbN1Ns8BPpGaXyFq0Qn16mudkrRDA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuChpj5iWxiZYzneEpVkb02KpAJ054ATT9pRxrUZEMQ3NIsPAEsogyDBzLzsChZ0vTohSIzOg_avPvVf1YgFFAgcFpxmNt4my5PRb9k7bx8CvoE4S7VvU5_iNljDL4cKUFNLtIK6Jsils2QUCZ36398GQkgEm9yNT63THYPFdbV3pAij7q0ADd2YJ2OHr_lvR04hBUVmCth6HyweGkaXyWWbB5TUpJTWkkaZFdttP32qaAPjwmWN-_Ypo0Kdt34k67BpXPt70TULkH4'
  ];

  const [activeImage, setActiveImage] = useState(product.image);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity);
    setTimeout(() => {
      setIsAdding(false);
    }, 1200);
  };

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg" style={{ marginTop: '96px', minHeight: '80vh' }}>
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 mb-stack-sm text-label-md font-label-md text-on-surface-variant" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <Link className="hover:text-primary" to="/store">Store</Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="hover:text-primary" style={{ textTransform: 'capitalize' }}>
          {product.category} {product.subCategory}
        </span>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-primary">{product.name}</span>
      </nav>

      {/* Product Detail Section */}
      <section className="product-detail-layout">
        {/* Left Side: Images */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            className="relative aspect-square overflow-hidden rounded-xl bg-surface-container shadow-sm border border-outline-variant"
            style={{
              position: 'relative',
              aspectRatio: '1/1',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              backgroundColor: 'var(--surface-container)',
              border: '1px solid var(--outline-variant)',
            }}
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              alt={product.name}
              src={activeImage}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2" style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {product.tag && (
                <span
                  className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-label-sm font-label-sm"
                  style={{
                    backgroundColor: 'var(--primary-container)',
                    color: 'var(--on-primary-container)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '12px',
                  }}
                >
                  {product.tag}
                </span>
              )}
              <span
                className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-label-sm font-label-sm"
                style={{
                  backgroundColor: 'var(--tertiary-fixed)',
                  color: 'var(--on-tertiary-fixed-variant)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '12px',
                }}
              >
                Vet Recommended
              </span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {defaultGallery.map((img, idx) => (
              <button
                key={idx}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                  activeImage === img ? 'border-primary' : 'border-outline-variant hover:border-primary'
                }`}
                onClick={() => setActiveImage(img)}
                style={{
                  aspectRatio: '1/1',
                  borderRadius: 'var(--radius-default)',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: activeImage === img ? 'var(--primary)' : 'var(--outline-variant)',
                  overflow: 'hidden',
                  padding: 0,
                }}
              >
                <img className="w-full h-full object-cover" src={img} alt={`Thumbnail ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Product Info */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 className="font-headline-md text-headline-md text-primary mb-2" style={{ margin: '0 0 8px 0', fontSize: '32px' }}>
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-stack-sm" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
            <div className="flex text-tertiary-container" style={{ display: 'flex', color: 'var(--tertiary-container)', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '18px' }}>star</span>
              ))}
            </div>
            <span className="text-body-md font-body-md text-on-surface-variant">4.8/5 (124 reviews)</span>
          </div>

          <div className="mb-stack-md" style={{ marginBottom: '24px' }}>
            <span className="text-display-lg font-display-lg text-primary" style={{ fontSize: '48px', fontWeight: 700 }}>
              ${product.price.toFixed(2)}
            </span>
            <span className="text-label-md font-label-md text-on-surface-variant ml-2" style={{ marginLeft: '8px' }}>
              / 12lb bag
            </span>
          </div>

          <p className="text-body-lg font-body-lg text-on-surface-variant mb-stack-md leading-relaxed" style={{ marginBottom: '24px', lineHeight: 1.8 }}>
            {product.description}
          </p>

          {/* Technical Specs Bento */}
          <div
            className="glass-card p-6 rounded-xl mb-stack-md space-y-4"
            style={{
              padding: '24px',
              borderRadius: 'var(--radius-lg)',
              marginBottom: '24px',
            }}
          >
            <h3 className="font-label-md text-label-md uppercase tracking-wider text-primary" style={{ textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', fontWeight: 700 }}>
              Nutritional Excellence
            </h3>
            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>check_circle</span>
                Vet-Approved Formula
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>check_circle</span>
                100% Organic Ingredients
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>check_circle</span>
                No Artificial Fillers
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>check_circle</span>
                Grain-Inclusive Option
              </li>
            </ul>
          </div>

          {/* Interactive Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-stack-lg" style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
            <div
              className="flex items-center border border-outline-variant rounded-full px-4 py-2 bg-surface"
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid var(--outline-variant)',
                borderRadius: 'var(--radius-full)',
                padding: '8px 16px',
                backgroundColor: 'var(--surface)',
              }}
            >
              <button className="p-1 hover:text-primary transition-colors" onClick={decrement}>
                <span className="material-symbols-outlined">remove</span>
              </button>
              <span className="w-12 text-center font-label-md" style={{ width: '48px', textAlign: 'center', fontWeight: 600 }}>
                {quantity}
              </span>
              <button className="p-1 hover:text-primary transition-colors" onClick={increment}>
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>

            <motion.button
              className="flex-grow bg-primary text-on-primary py-4 rounded-full font-label-md flex items-center justify-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 shadow-md"
              onClick={handleAddToCart}
              whileTap={{ scale: 0.95 }}
              animate={isAdding ? {
                backgroundColor: 'var(--primary-container)',
                scale: [1, 1.05, 0.95, 1.02, 1],
              } : {}}
              transition={{ duration: 0.4 }}
              style={{
                backgroundColor: isAdding ? 'var(--primary-container)' : 'var(--primary)',
                color: 'var(--on-primary)',
                borderRadius: 'var(--radius-full)',
                padding: '16px 32px',
                flexGrow: 1,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <span className="material-symbols-outlined">
                {isAdding ? 'check_circle' : 'shopping_bag'}
              </span>
              {isAdding ? 'Added ✓' : 'Add to Cart'}
            </motion.button>
          </div>

          {/* Tabs Accordion */}
          <div className="border-t border-outline-variant pt-6" style={{ borderTop: '1px solid var(--outline-variant)', paddingTop: '24px' }}>
            <details className="group py-4 border-b border-outline-variant" open style={{ padding: '16px 0', borderBottom: '1px solid var(--outline-variant)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none font-label-md text-primary" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 700 }}>
                <span>INGREDIENTS &amp; ANALYSIS</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed" style={{ marginTop: '16px', lineHeight: 1.7 }}>
                Deboned Lamb, Lamb Meal, Whole Oats, Barley, Brown Rice, Sunflower Oil, Natural Flavor, Flaxseed, Dried Chicory Root, Carrots, Apples, Blueberries, Rosemary Extract.
                <br /><br />
                <strong>Guaranteed Analysis:</strong> Protein (24%), Fat (14%), Fiber (4%), Moisture (10%).
              </p>
            </details>
            <details className="group py-4 border-b border-outline-variant" style={{ padding: '16px 0', borderBottom: '1px solid var(--outline-variant)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none font-label-md text-primary" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 700 }}>
                <span>SHIPPING &amp; RETURNS</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed" style={{ marginTop: '16px', lineHeight: 1.7 }}>
                Free standard shipping on orders over $50. Artisanal Feast is eligible for our 30-day "Palate Guarantee" - if your dog doesn\'t love it, we\'ll refund you.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="mt-stack-lg border-t border-outline-variant pt-stack-lg" style={{ marginTop: '48px', borderTop: '1px solid var(--outline-variant)', paddingTop: '48px' }}>
        <div className="flex justify-between items-end mb-stack-md" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
          <div>
            <h2 className="font-headline-sm text-headline-sm text-primary mb-2" style={{ margin: '0 0 8px 0', fontSize: '24px' }}>Customer Feedback</h2>
            <p className="text-body-md text-on-surface-variant" style={{ margin: 0 }}>Real stories from our premium pet community</p>
          </div>
        </div>

        <div className="reviews-grid">
          {product.reviews && product.reviews.map((rev, idx) => (
            <div key={idx} className="glass-card p-6 rounded-xl space-y-4" style={{ padding: '24px', borderRadius: 'var(--radius-lg)' }}>
              <div className="flex justify-between items-start" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p className="font-label-md text-primary" style={{ margin: 0, fontWeight: 700 }}>{rev.user}</p>
                  <p className="text-label-sm text-on-surface-variant" style={{ margin: '2px 0 0 0', fontSize: '12px' }}>Verified Buyer</p>
                </div>
                <div className="flex text-tertiary-container" style={{ display: 'flex', color: 'var(--tertiary-container)', gap: '2px' }}>
                  {[...Array(Math.floor(rev.rating))].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '18px' }}>star</span>
                  ))}
                  {rev.rating % 1 !== 0 && (
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '18px' }}>star_half</span>
                  )}
                </div>
              </div>
              <p className="text-body-md text-on-surface-variant italic leading-relaxed" style={{ marginTop: '16px', fontStyle: 'italic', lineHeight: 1.7 }}>
                "{rev.comment}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
