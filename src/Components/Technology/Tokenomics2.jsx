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
import React, { useState, useEffect } from 'react';
import "../../styles/imageStyles.css";
import "./technology2.scss";
import Article2 from "./Article2";

export const Tokenomics2 = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [circulatingSupply, setCirculatingSupply] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null);
  const [loadingCirculatingSupply, setLoadingCirculatingSupply] = useState(true);
  const [loadingTotalSupply, setLoadingTotalSupply] = useState(true);
   
  useEffect(() => {
    fetchStats();  
  }, []);
  const fetchStats = async () => {
    try {
      const response = await fetch(new Request("https://api.livecoinwatch.com/coins/single"), {
        method: "POST",
        headers: new Headers({
          "content-type": "application/json",
          "x-api-key": "17119f55-f02a-4186-98da-d26ca5acb906",
        }),
        body: JSON.stringify({
          currency: "USD",
          code: "_____MET",
          meta: true,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Circulating Supply Data:', data.circulatingSupply);
      setCirculatingSupply(data.circulatingSupply.toLocaleString('en-US'));
      setTotalSupply(data.totalSupply.toLocaleString('en-US'));
  
      // Assuming you want to set some state with the fetched data, replace setCirculatingSupply and setLoadingCirculatingSupply with your desired state update logic.
  
      // setCirculatingSupply(data.result);
      // setLoadingCirculatingSupply(false);
    } catch (error) {
      console.error('Error fetching circulating supply data:', error);
    }
  };
  
  /*
  useEffect(() => {
    fetchCirculatingSupply();  
  }, []);
 
  useEffect(() => {
    fetchTotalSupply();  
  }, []);
  const fetchCirculatingSupply = async () => {
    try {
      const response = await fetch("https://metscan.io/GetAPICirculatingSupply", { mode: 'no-cors'});
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Circulating Supply Data:', data);
      setCirculatingSupply(data.result);
      setLoadingCirculatingSupply(false);
    } catch (error) {
      console.error('Error fetching circulating supply data:', error);
    }
  };
  

  const fetchTotalSupply = async () => {
    try {
      const response = await fetch("https://metscan.io/GetAPITotalSupply", { mode: 'no-cors'});
      const data = await response.json();
      setTotalSupply(data.result);
      console.log(data.result);
      setLoadingTotalSupply(false);
    } catch (error) {
      console.error('Error fetching total supply data:', error);
    }
  };
  */
  const MaximumSupplyInfo = () => {
    return (
      <div className="gray-square">
        <div className="text" style={{ fontSize: '1.5em', color: '#DCA3EF' }}>Maximum Supply</div>
        <div className="text" style={{ fontWeight: 'bold' }}>1,000,000,000</div>
      </div>
    );
  };
  const TotalSuplyInfo = () => {
    return (
      <div className="gray-square">
        <div className="text" style={{ fontSize: '1.5em', color: '#DCA3EF' }}>Total Supply</div>
        <div className="text" style={{ fontWeight: 'bold' }}>{totalSupply}</div>
      </div>
    );
  };
  

  const DevelopmentFundInfo = () => {
    return (
      <div className="gray-square">
        <div className="text" style={{ fontSize: '1.5em', color: '#DCA3EF' }}>Development Fund</div>
        <div className="text" style={{ fontWeight: 'bold' }}>32,000,000</div>
      </div>
    );
  };
  const TotalValueStakedInfo = () => {
    return (
      <div className="gray-square">
        <div className="text" style={{ fontSize: '1.5em', color: '#DCA3EF' }}>Total Value Staked</div>
        <div className="text" style={{ fontWeight: 'bold' }}>14,000,000</div>
      </div>
    );
  };
  const BurnSupplyInfo = () => {
    return (
      <div className="gray-square">
        <div className="text" style={{ fontSize: '1.5em', color: '#DCA3EF' }}>Burnt Supply</div>
        <div className="text" style={{ fontWeight: 'bold' }}>Your Text Here</div>
      </div>
    );
  };
  const CirculatingSupplyInfo = () => {
    return (
      <div className="gray-square">
        <div className="text" style={{ fontSize: '1.5em', color: '#DCA3EF' }}>Circulating Supply</div>
        <div className="text" style={{ fontWeight: 'bold' }}>{circulatingSupply}</div>
      </div>
    );
  };
  const MiningEmissionsInfo = () => {
    return (
      <div className="gray-square">
        <div className="text" style={{ fontSize: '1.5em', color: '#DCA3EF' }}>Mining Emissions</div>
        <div className="text" style={{ fontWeight: 'bold' }}>4,000,000 per year</div>
      </div>
    );
  };
  const StakingEmissionsInfo = () => {
    return (
      <div className="gray-square">
        <div className="text" style={{ fontSize: '1.5em', color: '#DCA3EF' }}>Staking Emissions</div>
        <div className="text" style={{ fontWeight: 'bold' }}>Variable</div>
      </div>
    );
  };
  const handleFetchCirculatingSupply = () => {
    fetchCirculatingSupply();
  };
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
          <MaximumSupplyInfo />
          <TotalSuplyInfo/>
          <CirculatingSupplyInfo />
          <MiningEmissionsInfo />
          <StakingEmissionsInfo />
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

