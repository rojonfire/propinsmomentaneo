import React from "react";
import "./App.css";

import Navbar1 from "./components/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import IndexInmo from "./pages/inmo.js";
import Videos from "./pages/videos.js";

function App() {
  return (
    <div>
      <Router>
        <Navbar1 />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/propiedades" element={<About />} />
          <Route path="/referir" element={<Blogs />} />
          <Route path="/inmobiliarias" element={<IndexInmo />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
