import { useState } from "react";
import React from "react";
import '../App.css'
import './Profile.css'

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferences: {
      notifications: false,
      darkMode: false,
      privacy: "public"
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      preferences: {
        ...formData.preferences,
        [name]: checked
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="profile-container">
      <section className="personal-info">
        <h2
          className="font-size: 2rem;
  text-shadow: 0px 0px 10px #00ffcc;"
        >
          Personal Information
        </h2>
        <div className="info-field">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="info-field">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="info-field">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
      </section>

      <section className="preferences">
        <h2>Preferences</h2>
        <form onSubmit={handleSubmit}>
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

          <button type="submit">Save Preferences</button>
        </form>
      </section>
    </div>
  );
};

export default Profile;
