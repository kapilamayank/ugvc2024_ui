import React, { useState } from 'react';
import axios from 'axios';
import { FaArrowRight, FaArrowLeft, FaArrowUp, FaArrowDown } from "react-icons/fa";
import './App.css';

const App = () => {
  const [speed, setSpeed] = useState(30);

  const handleClick = (url) => {
    axios.get(url)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSliderChange = (event) => {
    setSpeed(event.target.value);
    axios.get(`http://192.168.0.101:5000/speed/${event.target.value}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">AGNI CONTROLLER</h1>
      </div>

      <div className="controls">
        {/* Forwards */}
        <div className="button-wrapper">
          <button
            className="control-button"
            onClick={() => handleClick('http://192.168.0.101:5000/start')}
          >
            <FaArrowUp />
          </button>
        </div>

        {/* Left Start/Stop Right */}
        <div className="button-group">
          <button
            className="control-button"
            onClick={() => handleClick('http://192.168.0.101:5000/left')}
          >
            <FaArrowLeft />
          </button>
          <button
            className="control-button stop-button"
            onClick={() => handleClick('http://192.168.0.101:5000/stop')}
          >
            Stop
          </button>
          <button
            className="control-button"
            onClick={() => handleClick('http://192.168.0.101:5000/right')}
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Reverse */}
        <div className="button-wrapper">
          <button
            className="control-button"
            onClick={() => handleClick('http://192.168.0.101:5000/reverse')}
          >
            <FaArrowDown />
          </button>
        </div>
      </div>

      <div className="slider-wrapper">
        <div className="slider-title">Speed Controller</div>
        <input
          type="range"
          min="0"
          max="255"
          value={speed}
          className="slider"
          onChange={handleSliderChange}
        />
        <div className="slider-value">{speed}</div>
      </div>
    </div>
  );
};

export default App;