import { motion } from "framer-motion";
import { CheckArrowIcon } from "../../assets/icons/CheckArrowIcon";


import chart from "../../assets/images/chart.png";
import infotokenomics from "../../assets/images/InfoTokenomics.png";
import infotokenomics2 from "../../assets/images/infotokenomics2.png";
import infotokenomics3 from "../../assets/images/infotokenomics3.png";
import infotokenomics4 from "../../assets/images/InfoTokenomics4.png";
import infotokenomics5 from "../../assets/images/InfoTokenomics5.png";
import dashboard from "../../assets/images/dashboard.png";
import dashboard2 from "../../assets/images/dashboard2.png";
import dashboard3 from "../../assets/images/dashboard3.png";
import dashboard4 from "../../assets/images/dashboard4.png";
import dashboard5 from "../../assets/images/dashboard5.png";
import dashboard6 from "../../assets/images/dashboard6.png";

import React from "react";
import "../../styles/imageStyles.css";
import "./technology2.scss";
import Article2 from "./Article2";

export const Tokenomics2 = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
    return (
    <section id="Technology-section" 
    style={{
    margin: 0, // Ensure zero margin
    padding: 0, // Ensure zero padding
  }}
    >
      <div className="title">
        <h1>Utilities and Tokenomics</h1>
        </div>

      <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="image-section">
            <h2>The MET coin’s utilities are:</h2>
            <div className="image-container-Utilities">
              <img src={infotokenomics} alt="Tokenomics" />
              <img src={infotokenomics2} alt="Tokenomics 2" />
              <img src={infotokenomics3} alt="Tokenomics 3" />
              <img src={infotokenomics4} alt="Tokenomics 4" />
              <img src={infotokenomics5} alt="Tokenomics 5" />
          </div>
          </div>
        </motion.div>
        <div className="image-grid flex-wrap justify-center">
          <img src={dashboard3} alt="Image 1" />
          <img src={dashboard4} alt="Image 2" />
          <img src={dashboard5} alt="Image 3" />
          <img src={dashboard6} alt="Image 4" />
          
        </div>

          <div className="image-container mx-auto flex justify-center">
          <div className="w-4/5 2xl:w-[1200px] mx-auto relative rounded-xl overflow-hidden justify-center">
              <img src={dashboard} alt="123" className="w-full h-auto mx-30" />
            </div>
  
            <div className="w-4/5 2xl:w-[1200px] mx-auto relative rounded-xl overflow-hidden justify-center">
              <img src={dashboard2} alt="123" className="w-full h-auto" />
            </div>
          
        </div>
    </section>
  );
};