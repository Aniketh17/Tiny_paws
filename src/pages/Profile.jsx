import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, FileText, Dog, Cat, ShieldCheck } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Profile() {
  const { pets, addPet, removePet, documents, addDocument, removeDocument } = useAppContext();
  
  const [newPetName, setNewPetName] = useState('');
  const [newPetSpecies, setNewPetSpecies] = useState('dog');
  const [newPetVaxDate, setNewPetVaxDate] = useState('');
  
  const [selectedPetForDoc, setSelectedPetForDoc] = useState('');

  const handleAddPet = (e) => {
    e.preventDefault();
    if (!newPetName || !newPetVaxDate) return;
    addPet({ name: newPetName, species: newPetSpecies, vaccinationDate: newPetVaxDate });
    setNewPetName('');
    setNewPetVaxDate('');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && selectedPetForDoc) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File too large. Max 2MB for local storage demo.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        addDocument({ petId: selectedPetForDoc, fileName: file.name, dataUrl: reader.result });
        e.target.value = null; // reset
      };
      reader.readAsDataURL(file);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      {/* Dashboard Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="dashboard-banner"
      >
        <div>
          <h1 style={{ fontSize: 'var(--title-md)', marginBottom: '10px' }}>My Dashboard</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Manage your pets, track vaccinations, and store medical records safely.</p>
        </div>
        <ShieldCheck size={100} opacity={0.2} />
      </motion.div>

      <div className="profile-grid">
        
        {/* Left Column: Add Pet & Pet List */}
        <div>
          <div style={{ background: 'var(--surface)', padding: '30px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', marginBottom: '40px', boxShadow: 'var(--shadow-sm)' }}>
            <h2 style={{ marginBottom: '24px', fontSize: '1.8rem' }}>Add New Pet</h2>
            <form onSubmit={handleAddPet} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Pet Name" className="form-control" value={newPetName} onChange={e => setNewPetName(e.target.value)} required />
              <select className="form-control" value={newPetSpecies} onChange={e => setNewPetSpecies(e.target.value)}>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.9rem' }}>Next Vaccination Date</label>
                <input type="date" className="form-control" value={newPetVaxDate} onChange={e => setNewPetVaxDate(e.target.value)} required />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', gap: '8px', padding: '14px' }}>
                <Plus size={20} /> Add Profile
              </motion.button>
            </form>
          </div>

          <motion.div variants={containerVariants} initial="hidden" animate="show" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>My Furry Friends</h3>
            {pets.map(pet => (
              <motion.div variants={itemVariants} key={pet.id} style={{ background: 'var(--surface)', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', color: 'var(--primary)', borderRadius: '50%' }}>
                    {pet.species === 'dog' ? <Dog size={32} /> : <Cat size={32} />}
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{pet.name}</h3>
                    <p className="text-muted" style={{ margin: 0, fontSize: '1rem', marginTop: '4px' }}>Vax Due: <strong style={{ color: 'var(--text-main)' }}>{new Date(pet.vaccinationDate).toLocaleDateString()}</strong></p>
                  </div>
                </div>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => removePet(pet.id)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><Trash2 size={24} /></motion.button>
              </motion.div>
            ))}
            {pets.length === 0 && <p className="text-muted">No pets added yet. Add your first furry friend above!</p>}
          </motion.div>
        </div>

        {/* Right Column: Document Vault */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <div style={{ background: 'var(--surface)', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
            <h2 style={{ marginBottom: '30px', fontSize: '2rem' }}>Medical Document Vault</h2>
            
            <div style={{ background: 'var(--bg-color)', padding: '30px', borderRadius: 'var(--radius-md)', marginBottom: '40px', border: '1px dashed var(--border)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Upload New Document</h3>
              <div className="doc-upload-grid">
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Select Pet</label>
                  <select className="form-control" value={selectedPetForDoc} onChange={e => setSelectedPetForDoc(e.target.value)}>
                    <option value="" disabled>Choose a pet...</option>
                    {pets.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Select File</label>
                  <input type="file" className="form-control" onChange={handleFileUpload} disabled={!selectedPetForDoc} accept="image/*,.pdf" style={{ padding: '11px' }} />
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Saved Documents</h3>
              {documents.length === 0 ? (
                <p className="text-muted">No documents saved in the vault.</p>
              ) : (
                <motion.div variants={containerVariants} initial="hidden" animate="show" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
                  {documents.map(doc => {
                    const petName = pets.find(p => p.id === doc.petId)?.name || 'Unknown Pet';
                    return (
                      <motion.div variants={itemVariants} key={doc.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', transition: 'border 0.2s' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                          <div style={{ padding: '12px', background: 'var(--bg-color)', borderRadius: 'var(--radius-md)' }}>
                            <FileText size={28} style={{ color: 'var(--primary)' }} />
                          </div>
                          <div>
                            <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{doc.fileName}</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>{petName} • {new Date(doc.date).toLocaleDateString()}</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <a href={doc.dataUrl} download={doc.fileName} className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>View</a>
                          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => removeDocument(doc.id)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '8px' }}><Trash2 size={20} /></motion.button>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
