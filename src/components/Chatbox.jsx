import React, { useState } from "react";
import "../App.css";

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { user: "Chatbot", text: "Hi there! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const predefinedResponses = {
    "hi": "Hello! How can I assist you today?",
    "hello": "Hi there! What can I do for you?",
    "yo": "Yo! How's it going?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what is your name": "I'm your friendly chatbot! What's your name?",
    "bye": "Goodbye! Have a great day!",
    "play some relaxing music": "Sure! Let me play some relaxing music for you.",
    "play some upbeat music": "You got it! I'll play some upbeat tunes for you.",
    "what kind of music do you play": "I can play relaxing, upbeat, or chill music based on your mood!",
    "i need some chill music": "I’ve got just the thing! Here’s some chill music for you.",
    "what is the weather like": "I can’t check the weather right now, but you can always check your favorite weather app!",
    "tell me a joke": "Why don't skeletons fight each other? They don't have the guts!"
  };

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { user: "You", text: input }]);
      setInput("");

      // Simulate typing animation
      setIsTyping(true);

      // Use setTimeout to simulate typing delay (1 second)
      setTimeout(() => {
        setIsTyping(false);

        // Check if the input matches any predefined responses
        const chatbotResponse = predefinedResponses[input.toLowerCase()];

        if (chatbotResponse) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { user: "Chatbot", text: chatbotResponse },
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { user: "Chatbot", text: "Sorry, I didn't understand that." },
          ]);
        }
      }, 1000); // Simulate 1 second delay
    }
  };

  return (
    <div className="chatbox-container">
      <h1 className="chatbox-title">Retro Chatbox</h1>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.user === "You" ? "user-message" : "chatbot-message"
            }`}
          >
            <span className="message-user">{message.user}:</span> {message.text}
          </div>
        ))}

        {/* Show typing animation while chatbot is "thinking" */}
        {isTyping && (
          <div className="message chatbot-message">
            <span className="message-user">Chatbot:</span> ...typing...
          </div>
        )}
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
