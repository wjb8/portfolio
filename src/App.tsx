import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Home from "./components/Home";

import "./App.css";
import { PortfolioProps, ResumeProps } from "../types/types";

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [portfolioData, setPortfolioData] = useState({});

  useEffect(() => {
    fetch("path/to/resume.json")
      .then((response) => response.json())
      .then((data) => setResumeData(data));
  }, []);

  useEffect(() => {
    fetch("path/to/portfolio.json")
      .then((response) => response.json())
      .then((data) => setPortfolioData(data));
  }, []);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/">
            <Home resumeData={resumeData} portfolioData={portfolioData} />
          </Route>
          <Route path="/resume">
            <Resume data={resumeData} />
          </Route>
          <Route path="/portfolio">
            <Portfolio data={portfolioData} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
