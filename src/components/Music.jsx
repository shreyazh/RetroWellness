import React, { useState } from "react";
import "./Music.css";

const Music = () => {
  const [mood, setMood] = useState("relaxed");
  const [customMood, setCustomMood] = useState("");
  const [musicPlaying, setMusicPlaying] = useState(false);

  const songs = {
    relaxed: ["Chill Vibes - Artist A", "Ocean Breeze - Artist B", "Calm Night - Artist C"],
    energetic: ["Pump Up Jam - Artist D", "Party Beat - Artist E", "Get Moving - Artist F"],
    focused: ["Study Flow - Artist G", "Concentration Beats - Artist H", "Work Mode - Artist I"],
  };

  const quotes = {
    relaxed: "“Take it easy, one beat at a time.”",
    energetic: "“Life’s too short to stand still, let’s dance!”",
    focused: "“Success is built on rhythm and focus.”",
    unknown: "“Every mood deserves a groove!”",
  };

  const emojis = {
    relaxed: "😌🌊✨",
    energetic: "💃🔥🎉",
    focused: "🧘📚🎧",
    unknown: "🎵🎶💡",
  };

  const handleCustomMood = () => {
    setMood(customMood || "unknown");
    setCustomMood("");
  };

  const toggleMusic = () => {
    setMusicPlaying((prev) => !prev);
  };

  return (
    <div className={`muzic-container ${mood === "energetic" ? "shake" : ""}`}>
      <h1 className="title">🎵 Pick Your Mood and Let’s Groove 🎵</h1>
      <div className="mood-selector">
        <button onClick={() => setMood("relaxed")}>Relaxed</button>
        <button onClick={() => setMood("energetic")}>Energetic</button>
        <button onClick={() => setMood("focused")}>Focused</button>
      </div>

      <div className="additional-options">
        <select onChange={(e) => setMood(e.target.value)}>
          <option value="relaxed">Relaxed</option>
          <option value="energetic">Energetic</option>
          <option value="focused">Focused</option>
        </select>
        <input
          type="text"
          placeholder="Enter your mood..."
          value={customMood}
          onChange={(e) => setCustomMood(e.target.value)}
        />
        <button onClick={handleCustomMood}>Set Custom Mood</button>
      </div>

      <section className="mood-display">
        <h2>
          {mood.charAt(0).toUpperCase() + mood.slice(1)} {emojis[mood] || emojis.unknown}
        </h2>
        <p className="quote">{quotes[mood] || quotes.unknown}</p>
      </section>

      <section className="mood-songs">
        <h2>{mood.charAt(0).toUpperCase() + mood.slice(1)} Playlist</h2>
        <ul>
          {songs[mood]?.map((song, index) => (
            <li key={index}>{song}</li>
          )) || <li>No songs available for this mood.</li>}
        </ul>
      </section>

      <div className="music-controls">
        <button onClick={toggleMusic}>
          {musicPlaying ? "🔇 Stop Background Music" : "🔊 Play Background Music"}
        </button>
      </div>

      {musicPlaying && (
        <audio autoPlay loop>
          <source src="https://www.bensound.com/bensound-music/bensound-funkyelement.mp3" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      )}
    </div>
  );
};

export default Music;
