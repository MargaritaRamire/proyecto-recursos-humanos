import React from 'react';
import '../styles/JobFilter.css';

function JobFilter({ areas, selectedArea, onSelectArea }) {
  return (
    <div className="job-filter">
      <label>Filtrar por área:</label>
      <select value={selectedArea} onChange={(e) => onSelectArea(e.target.value)}>
        <option value="">Todas</option>
        {areas.map((area, index) => (
          <option key={index} value={area}>{area}</option>
        ))}
      </select>
    </div>
  );
}

export default JobFilter;
