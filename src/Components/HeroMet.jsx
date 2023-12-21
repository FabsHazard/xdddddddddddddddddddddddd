import React from 'react';
import { motion, AnimatePresence } from "framer-motion";


import { useState } from "react";
import "../styles/HeroMet.css";
import background from "../assets/images/background.png";

export const HeroMet = () => {
  return (
    <div className="hero-container">
      
      <img
        className="hero-image"
        alt=""
        src={background}
      />
      <div className="hero-content">
        <div className="hero-text">
          <p>
            Scalable and Sustainable Transactions for the Next Generation of
            Web3 Applications
          </p>
          <p>
            Decentralized blockchain for smart contract execution, powered by an
            evolved Heavyhash algorithm.
          </p>
        </div>
        <div className="hero-title">
          <p>Metchain</p>
        </div>
      
      </div>
    </div>
  );
};



  
  

