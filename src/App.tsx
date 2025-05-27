import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Seminar1 from "./components/seminars/1";
import Documentation from "./components/Documentation";
import Seminar2 from "./components/seminars/2";
import Seminar3 from "./components/seminars/3";
import Seminar4 from "./components/seminars/4";
import Seminar5 from "./components/seminars/5";

const App: React.FC = () => {
  return (
    <Router basename="/SeminarLearnings">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/seminars/1" element={<Seminar1 />} />
        <Route path="/seminars/2" element={<Seminar2 />} />
        <Route path="/seminars/3" element={<Seminar3 />} />
        <Route path="/seminars/4" element={<Seminar4 />} />
        <Route path="/seminars/5" element={<Seminar5 />} />
        <Route path="/documentation" element={<Documentation />} />
        {/* Add 404 fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;