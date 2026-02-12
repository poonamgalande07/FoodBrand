import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Careers.css";

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  // Fetch jobs
  useEffect(() => {
    axios.get("http://localhost:8000/api/jobs/")
      .then(res => setJobs(res.data))
  }, []);

  // Apply click
  const handleApply = (jobId) => {
    const token = localStorage.getItem("access");
    if (!token) {
      navigate("/login");
    } else {
      navigate(`/apply/${jobId}`);
    }
  };

  return (
    <div className="career-container">
      <h2>Open Positions</h2>
      {jobs.map(job => (
        <div className="job-card" key={job.id}>
          <h3>{job.title}</h3>
          <p>Location: {job.location}</p>
          <p>{job.description}</p>
          <button onClick={() => handleApply(job.id)}>Apply</button>
        </div>
      ))}
    </div>
  );
}
