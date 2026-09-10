import React, { useState } from 'react';
import './PostJobForm.css';

function PostJobForm({ onPostJob }) {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    category: 'Development',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPostJob(formData);
    setFormData({
      title: '',
      company: '',
      category: 'Development',
      location: '',
      description: '',
    });
  };

  return (
    <section className="post-job-form" id="post">
      <div className="form-container">
        <h2>Post a Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Job Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="e.g., Senior Developer"
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company Name *</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="e.g., Tech Corp"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option>Development</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location">Location *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="e.g., New York, NY"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Job description..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Post Job</button>
        </form>
      </div>
    </section>
  );
}

export default PostJobForm;