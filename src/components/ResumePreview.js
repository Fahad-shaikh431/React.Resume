import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResumePreview() {
  const navigate = useNavigate();
  const [resume, setResume] = useState({
    fullName: '',
    email: '',
    phone: '',
    summary: '',
    education: '',
    experience: '',
    skills: ''
  });

  useEffect(() => {
    const stored = localStorage.getItem('resumeData');
    if (stored) {
      setResume(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-dark">📄 Resume Preview</h2>
        <div>
          <button className="btn btn-secondary me-2" onClick={() => navigate('/form')}>
            Edit Resume
          </button>
          <button className="btn btn-success" onClick={() => window.print()}>
            Download / Print
          </button>
        </div>
      </div>

      <div className="bg-white border rounded p-4 shadow-sm" id="resume-preview">
        <h3 className="text-primary fw-bold">{resume.fullName}</h3>
        <p className="mb-1"><strong>Email:</strong> {resume.email}</p>
        <p className="mb-3"><strong>Phone:</strong> {resume.phone}</p>

        <hr />

        <h5 className="text-secondary">Professional Summary</h5>
        <p>{resume.summary}</p>

        <h5 className="text-secondary mt-4">Education</h5>
        <p>{resume.education}</p>

        <h5 className="text-secondary mt-4">Experience</h5>
        <p>{resume.experience}</p>

        <h5 className="text-secondary mt-4">Skills</h5>
        <p>{resume.skills}</p>
      </div>
    </div>
  );
}

export default ResumePreview;
