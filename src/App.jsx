import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import Plans from "./components/Plans"
import Music from "./components/Music"
import Community from "./components/Community"
import Profile from "./components/Profile"
import Chatbox from "./components/Chatbox"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/music" element={<Music />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chatbox" element={<Chatbox />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
