// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Seminar1 from "./components/seminars/1"; 
import Documentation from "./components/Documentation"; 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/seminars/1" element={<Seminar1 />} />
        <Route path="/documentation" element={<Documentation />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;