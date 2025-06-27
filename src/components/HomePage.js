import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container py-5 text-center">
      <h1 className="display-4 fw-bold text-primary">🚀 AI-Powered Resume Builder</h1>
      <p className="lead text-muted mb-4">
        Build a modern, professional resume in minutes with our interactive form. Choose layout, preview, and save!
      </p>
      <button className="btn btn-lg btn-success px-5" onClick={() => navigate('/form')}>
        Get Started
      </button>
    </div>
  );
}

export default HomePage;
