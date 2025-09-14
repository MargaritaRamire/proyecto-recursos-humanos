import React from 'react';
import JobCard from './JobCard';
import '../styles/JobList.css';

function JobList({ jobs, onApply }) {
  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard
          key={job.id}
          title={job.title}
          area={job.area}
          description={job.description}
          onApply={() => onApply(job)}
        />
      ))}
    </div>
  );
}

export default JobList;
