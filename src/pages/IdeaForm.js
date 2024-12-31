import React, { useState } from "react";
import "./IdeaFormFloating.css";

const IdeaFormFloating = () => {
  const [formData, setFormData] = useState({
    name: "",
    usn: "",
    semester: "",
    branch: "",
    phone: "",
    email: "",
    pdf: null,
  });

  const [errors, setErrors] = useState({}); // State to track validation errors

  const validate = () => {
    const newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    // USN Validation (Example format: 1SI20CS001)
    if (!/^\d{1}[A-Z]{2}\d{2}[A-Z]{2}\d{3}$/.test(formData.usn)) {
      newErrors.usn = "USN must be in the format (e.g., 1SI20CS001).";
    }

    // Semester Validation
    if (!formData.semester) {
      newErrors.semester = "Semester is required.";
    }

    // Branch Validation
    if (!formData.branch) {
      newErrors.branch = "Branch is required.";
    }

    // Phone Validation
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    // Email Validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    // PDF Upload Validation
    if (!formData.pdf) {
      newErrors.pdf = "PDF file is required.";
    } else if (formData.pdf.type !== "application/pdf") {
      newErrors.pdf = "Only PDF files are allowed.";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "pdf") {
      setFormData({ ...formData, pdf: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Submitted Successfully", formData);

      // Reset form fields
      setFormData({
        name: "",
        usn: "",
        semester: "",
        branch: "",
        phone: "",
        email: "",
        pdf: null,
      });
      alert("Idea submitted successfully!");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <div className="idea-form-floating-container">
      <div className="form-background-overlay"></div>
      <div className="idea-form-content">
        <h2>Submit Your Idea</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="usn">USN:</label>
            <input
              type="text"
              id="usn"
              name="usn"
              value={formData.usn}
              onChange={handleChange}
              placeholder="Enter your USN"
              required
            />
            {errors.usn && <p className="error-text">{errors.usn}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="semester">Semester:</label>
            <select
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              required
            >
              <option value="">Select Semester</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem} value={sem}>
                  {sem}
                </option>
              ))}
            </select>
            {errors.semester && <p className="error-text">{errors.semester}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="branch">Branch:</label>
            <select
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
            >
              <option value="">Select Branch</option>
              {[
                "Computer Science",
                "Information Science",
                "Electronics and Communication",
                "Mechanical Engineering",
                "Civil Engineering",
                "Electrical and Electronics",
                "Aeronautical Engineering",
                "Biotechnology",
              ].map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
            {errors.branch && <p className="error-text">{errors.branch}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="pdf">Upload PDF:</label>
            <input
              type="file"
              id="pdf"
              name="pdf"
              accept="application/pdf"
              onChange={handleChange}
              required
            />
            {errors.pdf && <p className="error-text">{errors.pdf}</p>}
          </div>

          <button type="submit" className="submit-btn">
            Submit Idea
          </button>
        </form>
      </div>
    </div>
  );
};

export default IdeaFormFloating;
