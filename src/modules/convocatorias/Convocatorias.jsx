import React, { useState } from 'react';
import { convocatorias } from './convocatoriasData';
import JobList from './components/JobList';
import JobFilter from './components/JobFilter';
import JobApplicationForm from './components/JobApplicationForm';

function Convocatorias() {
  const [selectedArea, setSelectedArea] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const areas = [...new Set(convocatorias.map(job => job.area))];
  const filteredJobs = selectedArea ? convocatorias.filter(job => job.area === selectedArea) : convocatorias;

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  }

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedJob(null);
  }

  return (
    <div className="convocatorias-module">
      <h2>Convocatorias de empleo</h2>
      <JobFilter areas={areas} selectedArea={selectedArea} onSelectArea={setSelectedArea} />
      <JobList jobs={filteredJobs} onApply={handleApply} />
      {showForm && <JobApplicationForm job={selectedJob} onClose={handleCloseForm} />}
    </div>
  );
}

export default Convocatorias;
