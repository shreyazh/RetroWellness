import React, { useState } from "react";
import "../App.css";

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { user: "Chatbot", text: "Hi there! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { user: "You", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="chatbox-container">
      <h1 className="chatbox-title">Retro Chatbox</h1>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user === "You" ? "user-message" : "chatbot-message"}`}>
            <span className="message-user">{message.user}:</span> {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="chat-input"
        />
        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
