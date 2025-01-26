import { useState } from "react";

const Music = () => {
  const [mood, setMood] = useState("relaxed");

  const songs = {
    relaxed: ["Chill Vibes - Artist A", "Ocean Breeze - Artist B", "Calm Night - Artist C"],
    energetic: ["Pump Up Jam - Artist D", "Party Beat - Artist E", "Get Moving - Artist F"],
    focused: ["Study Flow - Artist G", "Concentration Beats - Artist H", "Work Mode - Artist I"],
  };

  return (
    <div className="muzic-container">
      <h2>Pick Your Mood and Lets Groove</h2>
      <div className="mood-selector">
        <button onClick={() => setMood("relaxed")}>Relaxed</button>
        <button onClick={() => setMood("energetic")}>Energetic</button>
        <button onClick={() => setMood("focused")}>Focused</button>
      </div>

      <section className="mood-songs">
        <h3>{mood.charAt(0).toUpperCase() + mood.slice(1)} Playlist</h3>
        <ul>
          {songs[mood].map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Music;
