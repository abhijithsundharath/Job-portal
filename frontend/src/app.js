import React, { useState, useEffect } from 'react';
import './app.css';
import Header from './components/header';
import Hero from './components/hero';
import JobListings from './components/joblistings';
import PostJobForm from './components/postjobform';
import Footer from './components/footer';

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const API_URL = 'http://localhost:5000';

  // fetchjobs from backend
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch(`${API_URL}/jobs`);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  // Handle new job
  const handlePostJob = async (jobData) => {
    try {
      const response = await fetch(`${API_URL}/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        const newJob = await response.json();
        setJobs([...jobs, newJob]);
        alert('Job posted successfully!');
      } else {
        alert('Failed to post job');
      }
    } catch (error) {
      console.error('Error posting job:', error);
      alert('Error posting job');
    }
  };

  // Filter jobs
  const filteredJobs =
    selectedCategory === 'All'
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  return (
  <div className="App">
    <Header />

    <div id="home">
      <Hero />
    </div>

    <div id="jobs">
      <JobListings 
        jobs={filteredJobs} 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
    </div>

    <div id="post">
      <PostJobForm onPostJob={handlePostJob} />
    </div>

    <div id="contact">
      <Footer />
    </div>
  </div>
);
}

export default App;