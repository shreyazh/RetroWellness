import { useState, useEffect } from "react";
import React from "react";
import "../App.css";
import "./Profile.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferences: {
      notifications: false,
      darkMode: false,
      privacy: "public",
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State to check if form is submitted

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("profileData"));
    if (storedData) {
      setFormData(storedData);
      setIsSubmitted(true); // Set as submitted if there’s data in localStorage
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      // Save the updated data to localStorage whenever it changes
      localStorage.setItem("profileData", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        preferences: { ...prevData.preferences, [name]: checked },
      };
      // Save the updated data to localStorage whenever it changes
      localStorage.setItem("profileData", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Update state to show the profile after submission
    // Save form data to localStorage when the form is submitted
    localStorage.setItem("profileData", JSON.stringify(formData));
  };

  return (
    <div className="profile-container">
      {!isSubmitted ? (
        <section className="form-section">
          <h2 className="profile-heading">Create Your Profile</h2>

          <form onSubmit={handleSubmit} className="profile-form">
            <div className="info-field">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="info-field">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="info-field">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <h3>Preferences</h3>

            <div className="preferences-field">
              <label>Notifications:</label>
              <input
                type="checkbox"
                name="notifications"
                checked={formData.preferences.notifications}
                onChange={handleCheckboxChange}
              />
            </div>

            <div className="preferences-field">
              <label>Dark Mode:</label>
              <input
                type="checkbox"
                name="darkMode"
                checked={formData.preferences.darkMode}
                onChange={handleCheckboxChange}
              />
            </div>

            <div className="preferences-field">
              <label>Privacy:</label>
              <select
                name="privacy"
                value={formData.preferences.privacy}
                onChange={handleInputChange}
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="friends">Friends Only</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Save Profile
            </button>
          </form>
        </section>
      ) : (
        <section className="profile-summary">
          <h2 className="profile-heading">Welcome, {formData.name}!</h2>

          <div className="profile-info">
            <div className="profile-photo">
              <img
                src="https://www.w3schools.com/w3images/avatar2.png" // Placeholder for profile photo
                alt="Profile"
              />
            </div>

            <div className="profile-details">
              <p>
                <strong>Name:</strong> {formData.name}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Phone:</strong> {formData.phone}
              </p>
              <p>
                <strong>Notifications:</strong>{" "}
                {formData.preferences.notifications ? "Enabled" : "Disabled"}
              </p>
              <p>
                <strong>Dark Mode:</strong>{" "}
                {formData.preferences.darkMode ? "On" : "Off"}
              </p>
              <p>
                <strong>Privacy:</strong> {formData.preferences.privacy}
              </p>
            </div>
          </div>

          <button
            className="edit-btn"
            onClick={() => {
              setIsSubmitted(false);
              localStorage.removeItem("profileData"); 
            }}
          >
            Edit Profile
          </button>
        </section>
      )}
    </div>
  );
};

export default Profile;
