import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import Plans from "./Pages/Plans"
import Music from "./Pages/Music"
import Community from "./Pages/Community"
import Profile from "./Pages/Profile"
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
      </Routes>
      <Footer />
    </>
  );
}

export default App
