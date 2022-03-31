import logo from "./Logo2.png";
import "./App.css";
import React, { Component } from "react";
import { WhatsAppOutlined, InstagramOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>En este momento estamos en remodelación</p>
        <p>Siguenos en instagram</p>
        <a
          className="insta"
          href="https://www.instagram.com/propinscl/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramOutlined />
        </a>
        <a
          href="https://wa.me/56978542618?"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="iconotrasnpare">
            <WhatsAppOutlined />
          </i>
        </a>
      </header>
    </div>
  );
}

export default App;
