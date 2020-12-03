import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "../style/App.css";

import Header from "./Home/Header";
import Body from "./Home/Body";
import Footer from "./Home/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Body />
      <Footer />
    </Router>
  );
}

export default App;
