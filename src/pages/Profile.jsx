import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

export default function Profile() {
  const { pets, addPet, removePet, documents, addDocument, removeDocument } = useAppContext();

  // Form States for Add Pet
  const [showAddPetForm, setShowAddPetForm] = useState(false);
  const [petName, setPetName] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petSpecies, setPetSpecies] = useState('Dog');
  const [vaccinationDate, setVaccinationDate] = useState('');

  // Drag-and-Drop / Upload States
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedPetId, setSelectedPetId] = useState('max-id');

  const handleAddPetSubmit = (e) => {
    e.preventDefault();
    if (!petName || !petBreed) return;

    // Hardcoded high-end placeholder pet images based on species
    const image = petSpecies.toLowerCase() === 'cat'
      ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgWTmTGmOn9NPZrN0KS9vgV-iZAxrarE0I4O5FcwnXas5jHZ2tg5lyYqHjGeIg5iluDnQg7T-kVL8waZTQKR9Xyh8QaNP2_P8jtGIexMa2V0zHtCpW1X8gsHvgmIEDDo-ML4KMRwwNylPbQKxUsATMhPlsMlstvCNfZsP8AjB0VFksp-vfzunwULktwftWqo7L24rJBGK7hmjPez-A_Ww2ykJZwto20K14hQWjp3i5fcA2h65oQJIgawnJosRmlwgL-24SxlCmJz8'
      : 'https://lh3.googleusercontent.com/aida-public/AB6AXuBytePVsbSW9T-QdmL4jiOSxqxiyY2Eorp4mYdgfHzp6ido2Hjbg7K7brTfmxWXEeoFom_siwQNb97npNHGzuwXlQa31NKd4DcJzu3FFGrbnH9wloZCAv9a7yb9s0LSuwNGZsXkExe9IZWaO6tvEQ21d9xY2dAB8Mh8bItMeiEQ-_tQFoZcHWkMQlRLKsvNJGG6MUbjR_o6ctHqvgjbDfMXsSkSepvf35pOoMexxjF3-VMS_fbs0o5uqPuiPIN-NNElhL3af5OPpik';

    addPet({
      name: petName,
      species: petSpecies,
      breed: petBreed,
      vaccinationDate: vaccinationDate || new Date().toISOString().split('T')[0],
      nextCheckup: vaccinationDate || new Date().toISOString().split('T')[0],
      image
    });

    // Reset Form
    setPetName('');
    setPetBreed('');
    setVaccinationDate('');
    setShowAddPetForm(false);
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      uploadFile(files[0]);
    }
  };

  const uploadFile = (file) => {
    addDocument({
      petId: selectedPetId,
      fileName: file.name,
      fileType: file.name.split('.').pop()
    });
    alert(`Successfully uploaded ${file.name} to the medical vault!`);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true);
    } else if (e.type === 'dragleave') {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="container" style={{ paddingBottom: 80, paddingTop: 120 }}>
      {/* Dashboard Header */}
      <div style={{ marginBottom: '48px' }}>
        <h1 className="font-display-lg text-primary" style={{ marginBottom: '8px' }}>
          Welcome back, Sarah
        </h1>
        <p className="font-body-lg text-on-surface-variant">
          Manage your companions and medical records in one secure place.
        </p>
      </div>

      <div className="profile-layout">
        
        {/* Left Column: Pet Profiles (4 Columns / left-side) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="font-headline-sm text-on-surface" style={{ margin: 0 }}>
              Your Companions
            </h2>
            <button
              onClick={() => setShowAddPetForm(!showAddPetForm)}
              style={{
                color: 'var(--primary)',
                fontFamily: 'var(--label-md)',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'underline',
                textDecorationColor: 'rgba(19, 66, 61, 0.3)'
              }}
            >
              {showAddPetForm ? 'Cancel' : '+ Add Pet'}
            </button>
          </div>

          {/* Add Pet Inline Form */}
          <AnimatePresence>
            {showAddPetForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <form
                  onSubmit={handleAddPetSubmit}
                  className="glass-card"
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    border: '1px solid rgba(19, 66, 61, 0.15)',
                    transform: 'none'
                  }}
                >
                  <h3 className="font-label-md text-primary" style={{ margin: 0 }}>Add Pet Details</h3>
                  
                  <div>
                    <label className="font-label-sm text-on-surface-variant" style={{ display: 'block', marginBottom: '6px' }}>Pet Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Max"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--surface-container-low)',
                        border: 'none',
                        borderRadius: 'var(--radius-default)',
                        padding: '10px 14px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label className="font-label-sm text-on-surface-variant" style={{ display: 'block', marginBottom: '6px' }}>Species</label>
                      <select
                        value={petSpecies}
                        onChange={(e) => setPetSpecies(e.target.value)}
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--surface-container-low)',
                          border: 'none',
                          borderRadius: 'var(--radius-default)',
                          padding: '10px 14px',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      >
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-label-sm text-on-surface-variant" style={{ display: 'block', marginBottom: '6px' }}>Breed</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Retriever"
                        value={petBreed}
                        onChange={(e) => setPetBreed(e.target.value)}
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--surface-container-low)',
                          border: 'none',
                          borderRadius: 'var(--radius-default)',
                          padding: '10px 14px',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-label-sm text-on-surface-variant" style={{ display: 'block', marginBottom: '6px' }}>Next Vaccination / Checkup</label>
                    <input
                      type="date"
                      value={vaccinationDate}
                      onChange={(e) => setVaccinationDate(e.target.value)}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--surface-container-low)',
                        border: 'none',
                        borderRadius: 'var(--radius-default)',
                        padding: '10px 14px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '12px' }}
                  >
                    Add Companion
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Companions List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {pets.map((pet) => {
              const isMax = pet.name === 'Max';
              const isLuna = pet.name === 'Luna';

              return (
                <div
                  key={pet.id}
                  className="glass-card"
                  style={{
                    padding: '24px',
                    border: '1px solid rgba(192, 200, 198, 0.3)',
                    transform: 'none'
                  }}
                >
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(19, 66, 61, 0.1)' }}>
                      <img
                        src={pet.image}
                        alt={pet.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <h3 className="font-headline-sm text-primary" style={{ margin: 0, fontSize: '20px' }}>
                          {pet.name}
                        </h3>
                        <span className="material-symbols-outlined text-secondary-container bg-primary" style={{ padding: '4px', borderRadius: '50%', fontSize: '16px', color: 'var(--secondary-container)' }}>
                          {pet.species.toLowerCase() === 'cat' ? 'pets' : 'labs'}
                        </span>
                      </div>
                      <p className="font-label-sm text-on-surface-variant" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                        {pet.breed || pet.species}
                      </p>
                    </div>
                  </div>

                  <div style={{ backgroundColor: 'var(--surface-container-low)', padding: '12px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span className="text-on-surface-variant">
                        {isLuna ? 'Grooming:' : 'Next Checkup:'}
                      </span>
                      <span className="text-primary" style={{ fontWeight: 600 }}>
                        {isLuna ? 'Tomorrow, 10 AM' : 'Oct 12, 2024'}
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                      <span className="text-on-surface-variant">
                        {isLuna ? 'Health Status:' : 'Vaccination:'}
                      </span>
                      {isLuna ? (
                        <span
                          className="font-label-sm"
                          style={{
                            backgroundColor: 'rgba(161, 207, 200, 0.3)',
                            color: 'var(--primary)',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            fontSize: '10px',
                            fontWeight: 'bold'
                          }}
                        >
                          EXCELLENT
                        </span>
                      ) : (
                        <span
                          className="font-label-sm"
                          style={{
                            backgroundColor: 'var(--tertiary-fixed)',
                            color: 'var(--on-tertiary-fixed-variant)',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            fontSize: '10px',
                            fontWeight: 'bold'
                          }}
                        >
                          DUE SOON
                        </span>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
                    <button
                      onClick={() => removePet(pet.id)}
                      className="font-label-sm"
                      style={{ color: 'var(--error)', textDecoration: 'underline' }}
                    >
                      Remove Profile
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Column: Medical Vault (8 Columns / right-side) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Upload Card */}
          <div className="glass-card" style={{ padding: '32px', transform: 'none' }}>
            <h2 className="font-headline-sm text-on-surface" style={{ marginBottom: '24px' }}>
              Medical Vault
            </h2>

            {/* Selection for upload association */}
            <div className="vault-companion-select" style={{ marginBottom: '16px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="font-label-md text-on-surface-variant">Link upload to companion:</span>
              <select
                value={selectedPetId}
                onChange={(e) => setSelectedPetId(e.target.value)}
                style={{
                  backgroundColor: 'var(--surface-container-low)',
                  border: 'none',
                  borderRadius: 'var(--radius-default)',
                  padding: '8px 16px',
                  fontSize: '13px',
                  outline: 'none',
                  color: 'var(--primary)',
                  fontWeight: 'semibold'
                }}
              >
                {pets.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            {/* Drop Zone */}
            <div
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              style={{
                border: isDragActive ? '2px dashed var(--primary)' : '2px dashed var(--outline-variant)',
                borderRadius: '16px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: isDragActive ? 'rgba(19, 66, 61, 0.05)' : 'transparent',
                transition: 'all 0.3s ease'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: 'var(--secondary-container)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  marginBottom: '16px'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>
                  upload_file
                </span>
              </div>
              <h4 className="font-headline-sm text-primary" style={{ marginBottom: '8px', fontSize: '20px' }}>
                Upload Record
              </h4>
              <p className="font-body-md text-on-surface-variant" style={{ maxWidth: '360px', margin: '0 0 24px', fontSize: '14px', lineHeight: 1.5 }}>
                Drag and drop medical PDFs, vaccination records, or lab results here
              </p>
              
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                accept="application/pdf,image/*"
              />
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById('file-upload').click()}
                style={{ padding: '12px 32px' }}
              >
                Select Files
              </button>
            </div>
          </div>

          {/* Recent Uploads Table Card */}
          <div className="glass-card" style={{ overflow: 'hidden', padding: 0, transform: 'none' }}>
            <div
              style={{
                padding: '24px',
                borderBottom: '1px solid rgba(192, 200, 198, 0.2)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <h3 className="font-headline-sm text-on-surface" style={{ margin: 0 }}>
                Recent Uploads
              </h3>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  style={{ padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}
                  onClick={() => alert("Filter Vault")}
                >
                  <span className="material-symbols-outlined text-on-surface-variant">filter_list</span>
                </button>
                <button
                  style={{ padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}
                  onClick={() => alert("Sort Vault")}
                >
                  <span className="material-symbols-outlined text-on-surface-variant">sort</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div style={{ overflowX: 'auto', width: '100%' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--surface-container-low)', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.1em', color: 'var(--on-surface-variant)' }}>
                    <th style={{ padding: '16px 24px' }}>Filename</th>
                    <th style={{ padding: '16px 24px' }}>Date</th>
                    <th style={{ padding: '16px 24px' }}>Linked Pet</th>
                    <th style={{ padding: '16px 24px', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => {
                    const linkedPetName = pets.find(p => p.id === doc.petId)?.name || 'Max';
                    const displayDate = new Date(doc.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

                    return (
                      <tr
                        key={doc.id}
                        style={{ borderBottom: '1px solid rgba(192, 200, 198, 0.1)' }}
                        className="table-row-hover"
                      >
                        <td style={{ padding: '16px 24px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span
                              className="material-symbols-outlined"
                              style={{
                                color: doc.fileType === 'pdf' ? 'var(--error)' : 'var(--primary)',
                                fontSize: '20px'
                              }}
                            >
                              {doc.fileType === 'pdf' ? 'picture_as_pdf' : 'description'}
                            </span>
                            <span className="font-label-md text-on-surface" style={{ fontSize: '14px', fontWeight: 500 }}>
                              {doc.fileName}
                            </span>
                          </div>
                        </td>
                        <td style={{ padding: '16px 24px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
                          {displayDate}
                        </td>
                        <td style={{ padding: '16px 24px' }}>
                          <span
                            className="font-label-sm"
                            style={{
                              backgroundColor: linkedPetName.toLowerCase() === 'max' ? 'rgba(19, 66, 61, 0.1)' : 'var(--secondary-container)',
                              color: linkedPetName.toLowerCase() === 'max' ? 'var(--primary)' : 'var(--on-secondary-container)',
                              padding: '4px 12px',
                              borderRadius: '9999px',
                              fontSize: '11px',
                              fontWeight: 'semibold'
                            }}
                          >
                            {linkedPetName}
                          </span>
                        </td>
                        <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                            <button
                              onClick={() => alert(`Viewing ${doc.fileName}...`)}
                              style={{ padding: '6px', color: 'var(--on-surface-variant)' }}
                            >
                              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>visibility</span>
                            </button>
                            <button
                              onClick={() => alert(`Downloading ${doc.fileName}...`)}
                              style={{ padding: '6px', color: 'var(--on-surface-variant)' }}
                            >
                              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                            </button>
                            <button
                              onClick={() => removeDocument(doc.id)}
                              style={{ padding: '6px', color: 'var(--error)' }}
                            >
                              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
