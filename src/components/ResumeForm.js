import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaGraduationCap, FaBriefcase, FaLightbulb } from 'react-icons/fa';

function ResumeForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    summary: '',
    education: '',
    experience: '',
    skills: '',
  });

  const handleChange = (e) => {
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);
    localStorage.setItem('resumeData', JSON.stringify(updated));
  };

  const handleSubmit = () => {
    localStorage.setItem('resumeData', JSON.stringify(formData));
    navigate('/preview');
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-dark mb-4">📝 Fill Your Resume Details</h2>
      <div className="row">
        {/* Form Section */}
        <div className="col-md-8">
          <div className="card shadow-sm p-4 border-0 mb-4">
            <h5><FaUser className="me-2 text-primary" />Personal Information</h5>
            <input name="fullName" placeholder="Full Name" className="form-control my-2" value={formData.fullName} onChange={handleChange} />
            <input name="email" placeholder="Email Address" className="form-control my-2" value={formData.email} onChange={handleChange} />
            <input name="phone" placeholder="Phone Number" className="form-control my-2" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="card shadow-sm p-4 border-0 mb-4">
            <h5><FaLightbulb className="me-2 text-primary" />Professional Summary</h5>
            <textarea name="summary" rows="4" className="form-control my-2" placeholder="Write a short summary..." value={formData.summary} onChange={handleChange}></textarea>
          </div>

          <div className="card shadow-sm p-4 border-0 mb-4">
            <h5><FaGraduationCap className="me-2 text-primary" />Education</h5>
            <textarea name="education" className="form-control my-2" placeholder="E.g., B.Sc. in Computer Science from XYZ University" value={formData.education} onChange={handleChange}></textarea>
          </div>

          <div className="card shadow-sm p-4 border-0 mb-4">
            <h5><FaBriefcase className="me-2 text-primary" />Experience</h5>
            <textarea name="experience" className="form-control my-2" placeholder="E.g., Frontend Developer at ABC Inc." value={formData.experience} onChange={handleChange}></textarea>
          </div>

          <div className="card shadow-sm p-4 border-0 mb-4">
            <h5>🧠 Skills</h5>
            <input name="skills" placeholder="E.g., React, Bootstrap, MySQL" className="form-control my-2" value={formData.skills} onChange={handleChange} />
          </div>

          <button className="btn btn-primary w-100 py-2" onClick={handleSubmit}>
            Preview My Resume
          </button>
        </div>

        {/* Sidebar */}
        <div className="col-md-4">
          <div className="p-4 bg-primary text-white rounded shadow-sm">
            <h5 className="mb-3">💡 Tips</h5>
            <ul className="ps-3">
              <li>Use clear bullet points</li>
              <li>Highlight top skills</li>
              <li>Keep your experience relevant</li>
              <li>Use action words like "Built", "Led", "Created"</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeForm;
