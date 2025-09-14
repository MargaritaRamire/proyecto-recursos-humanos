import React from 'react';
import '../styles/ApplicationStatus.css';

function ApplicationStatus({ job, status }) {
  return (
    <div className="application-status">
      <p>Estado de tu postulación a <strong>{job.title}</strong>: {status}</p>
    </div>
  );
}

export default ApplicationStatus;
