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
    "tell me a joke": "Why don't skeletons fight each other? They don't have the guts!",
    "sports yoga": "Sports yoga helps improve flexibility, strength, balance, and mental focus, all of which are essential for better performance in sports.",
    "warm-up": "A good warm-up for sports yoga includes dynamic stretches like leg swings, arm circles, and lunges. It helps increase blood flow and flexibility.",
    "cool-down": "For a cooldown, poses like Forward Fold, Seated Twist, and Supine Hamstring Stretch can help relax the body and reduce muscle tension.",
    "poses": "Some essential yoga poses for athletes are Downward Dog, Child's Pose, Warrior, and Cobra. These stretches help enhance flexibility, strength, and balance.",
    "downward dog": "Downward Dog is a great full-body stretch that targets the hamstrings, calves, and back. It's also great for strengthening the arms and shoulders.",
    "child's pose": "Child's Pose is a resting posture that gently stretches the back and hips. It's excellent for relaxation and recovery after intense physical activity.",
    "warrior": "Warrior Pose strengthens the legs and core, while improving balance and stability. It also helps with hip flexibility and chest expansion.",
    "cobra pose": "Cobra Pose is great for strengthening the back muscles and increasing flexibility in the spine. It also stretches the chest and shoulders.",
    "tree pose": "Tree Pose improves balance, strengthens the legs, and stretches the groin, inner thighs, and shoulders.",
    "bridge pose": "Bridge Pose strengthens the glutes, lower back, and hamstrings. It also opens the chest and improves flexibility in the spine.",
    "plank": "Plank is an excellent pose for building core strength and stability. It engages the arms, shoulders, and legs, making it great for athletes.",
    "seated forward fold": "Seated Forward Fold stretches the hamstrings, calves, and spine. It's great for improving flexibility in the lower body.",
    "supine twist": "Supine Twist is a restorative pose that helps release tension in the spine and hips, promoting relaxation and flexibility.",
    "breathing": "Breathing exercises such as diaphragmatic breathing and Ujjayi pranayama are perfect for athletes. They help with relaxation and performance.",
    "pranayama": "Pranayama refers to controlled breathing techniques in yoga. It helps increase lung capacity, focus, and mental clarity.",
    "diaphragmatic breathing": "Diaphragmatic breathing, also known as belly breathing, involves deep breaths that expand the diaphragm. It helps reduce stress and improve focus.",
    "ujjayi breath": "Ujjayi Breath, or victorious breath, is a type of breathing that creates a soft sound, helping focus and calm the mind during yoga practice.",
    "box breathing": "Box Breathing is a simple technique where you inhale, hold the breath, exhale, and hold again for equal counts. It promotes relaxation and focus.",
    "alternate nostril breathing": "Alternate Nostril Breathing helps clear the mind, balance energy, and improve concentration by breathing alternately through each nostril.",
    "yoga for flexibility": "Yoga is excellent for improving flexibility. Poses like Downward Dog, Forward Fold, and Pigeon are particularly helpful for stretching the hamstrings and hips.",
    "yoga for strength": "Yoga helps build strength, especially in the core, arms, and legs. Poses like Plank, Warrior, and Chair Pose are excellent for strength training.",
    "yoga for balance": "Yoga enhances balance through poses like Tree Pose, Warrior III, and Half Moon. These poses engage your core and leg muscles to improve stability.",
    "injury prevention": "Yoga can help prevent injuries by improving flexibility, strength, and body awareness. Focus on poses that stretch and strengthen commonly tight areas like the hamstrings and lower back.",
    "hamstring stretch": "A hamstring stretch in yoga helps lengthen the hamstrings, reducing the risk of injury and improving flexibility.",
    "lower back stretch": "Yoga poses like Child’s Pose and Seated Forward Fold are great for stretching the lower back, which helps reduce tension and prevent injury.",
    "shoulder stretches": "Shoulder stretches like Eagle Pose and Downward Dog help relieve tension and improve shoulder mobility, which is especially helpful for athletes.",
    "hip flexor stretch": "Hip Flexor stretches like Lunge Pose and Pigeon Pose help release tightness in the hips and improve flexibility, especially after running or cycling.",
    "neck stretches": "Gentle neck stretches in yoga, such as Seated Neck Stretch or Shoulder Rolls, can help alleviate tension in the neck and shoulders, common areas of tightness for athletes.",
    "sports recovery yoga": "Yoga is an excellent recovery tool for athletes. Poses that focus on relaxation, gentle stretching, and breathing can help reduce soreness and speed up recovery.",
    "sports injury recovery": "Sports injury recovery can benefit from yoga as it helps gently stretch and strengthen the body without putting too much strain on the injury site. Poses like Child’s Pose and Cat-Cow are good options.",
    "yoga for runners": "Runners can benefit from yoga poses like Forward Fold, Downward Dog, and Pigeon to release tension in the hips, hamstrings, and calves.",
    "yoga for cyclists": "Cyclists can benefit from hip flexor stretches, backbends like Cobra, and shoulder stretches to reduce tightness and improve mobility.",
    "yoga for tennis players": "Tennis players benefit from stretches targeting the shoulders, wrists, and hips. Poses like Warrior and Downward Dog help open up these areas.",
    "yoga for swimmers": "Yoga helps swimmers improve flexibility in the shoulders and hips, with poses like Shoulder Opener, Pigeon, and Forward Fold.",
    "yoga for golfers": "Golfers benefit from yoga poses like Chair Pose and Twists, which help increase flexibility and stability in the hips, lower back, and shoulders.",
    "yoga for soccer players": "Soccer players can improve their flexibility and strength through poses like Downward Dog, Warrior, and Lunge Pose, which help with leg mobility and core stability.",
    "meditation": "Meditation in yoga helps calm the mind, reduce stress, and improve focus. Practices like mindfulness and body scanning are great for athletes before and after training.",
    "mindfulness": "Mindfulness in yoga involves being present in the moment and paying attention to sensations in the body. This practice can improve athletic performance and mental clarity.",
    "restorative yoga": "Restorative yoga is a slower-paced style of yoga that uses props to support the body in passive poses. It's ideal for recovery and relaxation after intense exercise.",
    "vinyasa yoga": "Vinyasa yoga is a dynamic style of yoga that links breath to movement. It's perfect for athletes looking to build strength and flexibility while moving through sequences of poses.",
    "hatha yoga": "Hatha yoga is a gentle form of yoga that focuses on basic postures and breathing techniques. It’s great for beginners or athletes looking for a slower-paced practice.",
    "ashtanga yoga": "Ashtanga yoga is a more vigorous style of yoga that follows a set sequence of poses. It’s excellent for building strength, flexibility, and endurance.",
    "power yoga": "Power yoga is a faster-paced, high-intensity yoga style that builds strength and endurance. It's great for athletes looking to challenge their bodies and improve performance.",
    "yoga for athletes": "Yoga for athletes helps enhance physical performance, improve flexibility, prevent injuries, and calm the mind for better focus and recovery.",
    "yoga for mental focus": "Yoga enhances mental clarity and focus through breathwork and meditation. Practices like Ujjayi breath and mindfulness improve concentration, which is key for athletes.",
    "breathing techniques": "Breathing techniques in yoga, such as diaphragmatic breathing, Ujjayi breath, and Box breathing, help athletes manage stress and improve their physical performance.",
    "yoga and mindfulness": "Yoga and mindfulness go hand-in-hand, with both practices helping to calm the mind, increase awareness, and improve overall well-being.",
    "mental clarity": "Yoga improves mental clarity through meditation, breathwork, and mindfulness practices that help athletes stay focused and calm under pressure.",
    "yoga for stress relief": "Yoga reduces stress by promoting relaxation through poses, breathing techniques, and meditation, which help activate the parasympathetic nervous system.",
    "yoga for anxiety": "Yoga can help alleviate anxiety by encouraging mindfulness, deep breathing, and relaxation techniques that calm the nervous system and reduce stress.",
    "yoga for depression": "Yoga can support mental health by improving mood, reducing stress, and increasing mindfulness. It helps release physical tension that contributes to mental fatigue.",
    "self-care": "Yoga is an excellent form of self-care, combining physical exercise with mental relaxation techniques. Regular practice helps maintain overall well-being.",
    "strengthening yoga": "Strengthening yoga includes poses that target muscle groups, such as Plank, Warrior, and Downward Dog, to improve endurance, stability, and power.",
    "yoga for flexibility and mobility": "Yoga improves flexibility and mobility through stretching and strengthening exercises, enhancing the range of motion and reducing muscle tightness.",
    "warm-up": "A good warm-up for sports yoga includes dynamic stretches like leg swings, arm circles, and lunges. It helps increase blood flow and flexibility.",
    "poses": "Some essential yoga poses for athletes are Downward Dog, Child's Pose, Warrior, and Cobra. These stretches help enhance flexibility, strength, and balance.",
    "breathing": "Breathing exercises such as diaphragmatic breathing and Ujjayi pranayama are perfect for athletes. They help with relaxation and performance.",
    "cooldown": "For a cooldown, poses like Forward Fold, Seated Twist, and Supine Hamstring Stretch can help relax the body and reduce muscle tension."
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
