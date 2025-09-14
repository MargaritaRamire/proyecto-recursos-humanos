import React, { useState } from 'react';
import '../styles/JobApplicationForm.css';

function JobApplicationForm({ job, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Aplicación enviada:', { job, name, email, file });
    alert('Postulación enviada');
    onClose();
  }

  return (
    <div className="job-application-form">
      <h3>Postular a: {job.title}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre completo" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
        <button type="submit">Enviar</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
}

export default JobApplicationForm;
