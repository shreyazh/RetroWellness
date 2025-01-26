import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="landing-page">
      <h1 className="welcome-title">Welcome to RetroWellness</h1>

      <h2 className="sub-title">Plans</h2>
      <div className="categories">
        <div className="card">
          <h3>Personal Growth</h3>
          <ul>
            <li>Personalized Plans</li>
            <li>Nutrition Planner</li>
          </ul>
          <Link to="/plans">
          <button className="retro-btn">Learn More</button>
          </Link>
        </div>
        <div className="card">
          <h3>Mental Clarity</h3>
          <ul>
            <li>Healthy Lifestyle Tips</li>
            <li>Yoga/Exercises</li>
          </ul>
          <Link to="/plans">
          <button className="retro-btn">Learn More</button>
          </Link>
        </div>
        <div className="card">
          <h3>Interactive Tools</h3>
          <ul>
            <li>Mood-to-Music Generator</li>
            <li>Time Capsule</li>
          </ul>
          <Link to="/plans">
          <button className="retro-btn">Learn More</button>
          </Link>
        </div>
      </div>

      <h2 className="sub-title">Music</h2>
      <div className="categories">
        <div className="card">
          <h3>Mood picker</h3>
          <ul>
            <li>List of moods</li>
          </ul>
          <Link to="/music">
          <button className="retro-btn">Learn More</button>
          </Link>
        </div>
        <div className="card">
          <h3>AI Recommended Playlist</h3>
          <ul>
            <li>Mood-to-Music Generator</li>
            <li>Playlist from Spotify/Youtube</li>
          </ul>
          <Link to="/music">
          <button className="retro-btn">Learn More</button>
          </Link>
        </div>
      </div>

      <h2 className="sub-title">Community</h2>
      <div className="categories">
        <div className="card">
          <h3>Discussion forums</h3>
          <ul>
            <li>Personalized Content</li>
            <li>Start a discussion</li>
          </ul>
          <Link to="/community">
          <button className="retro-btn">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
