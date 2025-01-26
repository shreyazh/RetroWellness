# RetroWellness 🕹️  
**Hackathon Project | Hack the Future: AI & Open Source Hackathon**  

RetroWellness is a mental health-focused web application designed with a nostalgic retro theme. It aims to support users in managing their mental well-being through personalized plans, interactive tools, and community support, all while bringing a fun and engaging user experience.

---

## 💡 Features  

1. **Personalized Plans**  
   Tailored recommendations to help users achieve mental clarity and personal growth.  

2. **Healthy Lifestyle Recommender**  
   Simple tips and tricks for a better lifestyle, including nutrition advice and self-care reminders.  

3. **Mood-to-Music Generator**  
   AI-powered music recommendations based on the user's mood to boost emotional well-being.  

4. **Time Capsule**  
   A digital journal feature where users can store their thoughts and revisit them later.  

5. **Yoga/Exercises Page**  
   A curated list of exercises and yoga routines for relaxation and physical wellness.  

6. **Nutrition Planner**  
   Form-based meal planning and dietary advice for mental and physical health.  

7. **Community Forums**  
   A safe space to connect, share experiences, and support others in their mental health journeys.  

8. **ChatBox**
   A chatbox to get more information and advice about health plans.

9. **Retro UI**  
   Bringing the vibes of the past with a bold, pixel-perfect retro design!  

---

## 🚀 Tech Stack  

### **Frontend**  
- **React.js**  
- **CSS** (Retro theme styling)  
- **React Router** (For navigation between pages)  

### **Backend**    
- **Python Flask** (For AI-powered features like the mood-to-music generator)  

### **Database**  
- **MySQL** (For storing user data, plans, and community forum content)  

### **AI/ML**  
- **Scikit-learn**  
- **Spotify API** (for generating music recommendations)  
- **OpenAI API** (for chating with the chatbox)
---

## 📖 How to Run  

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/shreyazh/RetroWellness.git
   cd RetroWellness
   ```

2. **Install Dependencies**  
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file in the backend folder and add your environment variables:  
   ```
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   SPOTIFY_API_KEY=your_spotify_api_key
   ```

4. **Start the Application**  
   ```bash
   # Run the backend server
   cd backend
   npm start

   # Run the frontend server
   cd ../frontend
   npm start
   ```

5. **Visit the App**  
   Open your browser and go to `http://localhost:3000`.

---

## 🌟 Contribution  

We welcome contributions from the community! Here's how you can contribute:  

1. Fork the repository.  
2. Create a new branch: `git checkout -b feature-name`.  
3. Make your changes and commit them: `git commit -m "Added a feature"`.  
4. Push your branch: `git push origin feature-name`.  
5. Submit a pull request.  

---

## 📜 License  

This project is licensed under the MIT License. See `LICENSE` for more details.
