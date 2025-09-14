import React from 'react';
import '../styles/JobCard.css';

function JobCard({ title, area, description, onApply }) {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p><strong>Área:</strong> {area}</p>
      <p>{description}</p>
      <button onClick={onApply}>Postularme</button>
    </div>
  );
}

export default JobCard;
