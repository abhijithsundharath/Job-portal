import React, { useState } from 'react';
import './postjobform.css';

function PostJobForm({ onPostJob }) {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onPostJob({
      title,
      company,
      category,
      location,
      description
    });

    setTitle('');
    setCompany('');
    setCategory('');
    setLocation('');
    setDescription('');
  };

  return (
    <div className="post-job-form">
      <div className="form-container">

        <h2>Post a Job</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <input
              type="text"
              placeholder="Job Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="form-group">
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-btn">
            Post Job
          </button>

        </form>
      </div>
    </div>
  );
}

export default PostJobForm;