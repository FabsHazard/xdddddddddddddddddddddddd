import React, { useState, useEffect } from "react";
import "../../styles/imageStyles.css";
import "./technology2.scss";
import { motion } from "framer-motion";

import infotokenomics from "../../assets/images/InfoTokenomics.png";
import infotokenomics2 from "../../assets/images/infotokenomics2.png";
import infotokenomics3 from "../../assets/images/infotokenomics3.png";
import infotokenomics4 from "../../assets/images/InfoTokenomics4.png";
import infotokenomics5 from "../../assets/images/InfoTokenomics5.png";
import dashboard from "../../assets/images/dashboard.png";
import dashboard2 from "../../assets/images/dashboard2.png";

export const Tokenomics2 = () => {
  const [circulatingSupply, setCirculatingSupply] = useState(null);

  // Function to fetch circulating supply
  const fetchCirculatingSupply = async () => {
    try {
      const response = await fetch("https://metscan.io/GetMinebaleAndCirculatingSupplyInfo");
      if (!response.ok) {
        throw new Error("Failed to fetch API data");
      }
      const data = await response.json();

      // Extract the required values from the API response
      const { balanceburntSupply, totalStaked } = data;

      // Calculate circulating supply
      const calculatedCirculatingSupply = balanceburntSupply - totalStaked;

      // Update state
      setCirculatingSupply(calculatedCirculatingSupply.toLocaleString("en-US"));
    } catch (error) {
      console.error("Error fetching circulating supply:", error);
    }
  };

  // Fetch the circulating supply on component mount
  useEffect(() => {
    fetchCirculatingSupply();
  }, []);

  // CirculatingSupplyInfo component
  const CirculatingSupplyInfo = () => {
    return (
      <div className="gray-square">
        <div className="text" style={{ fontSize: "1.5em", color: "#DCA3EF" }}>
          Circulating Supply
        </div>
        <div className="text" style={{ fontWeight: "bold" }}>
          {circulatingSupply ? circulatingSupply : "Loading..."}
        </div>
      </div>
    );
  };

  const MaximumSupplyInfo = () => {
    return (
      <div className="gray-square">
        <div className="text" style={{ fontSize: "1.5em", color: "#DCA3EF" }}>Maximum Supply</div>
        <div className="text" style={{ fontWeight: "bold" }}>1,000,000,000</div>
      </div>
    );
  };

  const MiningEmissionsInfo = () => {
    return (
      <div className="gray-square">
        <div className="text" style={{ fontSize: "1.5em", color: "#DCA3EF" }}>Mining Emissions</div>
        <div className="text" style={{ fontWeight: "bold" }}>4,000,000 per year</div>
      </div>
    );
  };

  const StakingEmissionsInfo = () => {
    return (
      <div className="gray-square">
        <div className="text" style={{ fontSize: "1.5em", color: "#DCA3EF" }}>Staking Emissions</div>
        <div className="text" style={{ fontWeight: "bold" }}>Variable</div>
      </div>
    );
  };

  return (
    <section
      id="Technology-section"
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
        <MaximumSupplyInfo />
        <CirculatingSupplyInfo />
        <MiningEmissionsInfo />
        <StakingEmissionsInfo />
      </div>

      <div className="image-container mx-auto flex justify-center">
        <div className="w-4/5 2xl:w-[1200px] mx-auto relative rounded-xl overflow-hidden justify-center">
          <img src={dashboard} alt="Dashboard 1" className="w-full h-auto mx-30" />
        </div>

        <div className="w-4/5 2xl:w-[1200px] mx-auto relative rounded-xl overflow-hidden justify-center">
          <img src={dashboard2} alt="Dashboard 2" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};
