
import "./Home.css";

function Home() {
  return (
    <div className="landing-page">
      <h2 className="welcome-title">Welcome to RetroWellness</h2>
      <div className="categories">
        <div className="card">
          <h3>Personal Growth</h3>
          <ul>
            <li>Personalized Plans</li>
            <li>Nutrition Planner</li>
          </ul>
          <button className="retro-btn">Learn More</button>
        </div>
        <div className="card">
          <h3>Mental Clarity</h3>
          <ul>
            <li>Healthy Lifestyle Tips</li>
            <li>Yoga/Exercises</li>
          </ul>
          <button className="retro-btn">Learn More</button>
        </div>
        <div className="card">
          <h3>Interactive Tools</h3>
          <ul>
            <li>Mood-to-Music Generator</li>
            <li>Time Capsule</li>
          </ul>
          <button className="retro-btn">Learn More</button>
        </div>
        <div className="card">
          <h3>Community</h3>
          <ul>
            <li>Community Forums</li>
          </ul>
          <button className="retro-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
