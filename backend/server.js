const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const jobsFile = './jobs.json';

// Read jobs from jobs.json
let jobs = JSON.parse(fs.readFileSync(jobsFile, 'utf8'));

// GET jobs
app.get('/jobs', (req, res) => {
  res.json(jobs);
});

// POST new job
app.post('/jobs', (req, res) => {
  const { title, company, category, location, description } = req.body;

  if (!title || !company || !category || !location || !description) {
    return res.status(400).json({ error: 'All fields required' });
  }

  const newJob = {
    id: jobs.length > 0 ? Math.max(...jobs.map(job => job.id)) + 1 : 1,
    title,
    company,
    category,
    location,
    description
  };

  jobs.push(newJob);

  // Save the new job permanently
  fs.writeFileSync(jobsFile, JSON.stringify(jobs, null, 2));

  res.status(201).json(newJob);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});