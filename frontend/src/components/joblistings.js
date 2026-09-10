import React from 'react';
import './joblistings.css';

function JobListings({ jobs, selectedCategory, onCategoryChange }) {
  const categories = ['All', 'Development', 'Design', 'Marketing'];

  return (
    <section className="job-listings">
      <div className="container">
        <h2>Job Listings</h2>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="jobs-container">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job.id} className="job-card">
                <h3>{job.title}</h3>
                <p className="company">{job.company}</p>
                <p className="category">{job.category}</p>
                <p className="location">📍 {job.location}</p>
                <p className="description">{job.description}</p>
              </div>
            ))
          ) : (
            <p className="no-jobs">No jobs found in this category</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default JobListings;