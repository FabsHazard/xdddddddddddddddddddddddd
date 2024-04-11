import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { LoadingIcon } from "../assets/icons/LoadingIcon";
import background1 from "../assets/images/Background1.png";
import "../styles/gradient.css";

export const Features1 = () => {
  const [price, setPrice] = useState(null); 
  useEffect(() => {
    fetchPrice();
  }, []);

  const fetchPrice = async () => {
    try {
      const response = await fetch("https://api.xeggex.com/api/v2/asset/getbyid/65dea6efb9f343ee794a9d68");
      const data = await response.json();
      const truncatedPrice = parseFloat(data.usdValue).toFixed(3); 
      setPrice(truncatedPrice);
    } catch (error) {
      console.error("Error fetching price:", error);
    }
  };
  return (
    <section
      className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0 xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="features"
      style={{
        backgroundImage: `url(${background1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
      <div className="flex flex-wrap items-center justify-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-full lg:w-3/4 mb-12 lg:mb-0">
          <div className="mx-auto lg:mb-0 w-95 sm:w-4/5 md:w-95 lg:w-unset text-center">
            <h2 className="text-xl lg:text-2xl font-bold mb-4 " style={{ color: "#DCA3EF" }}>Embrace Innovation</h2>
            <h2 className="mt-6 mb-4 text-4xl lg:text-5xl custom-block-big-title">
              Unlike Any Blockchain
            </h2>
            <h3 className="mt-6 mb-4 text-4xl lg:text-5xl titulofade">
              You Have Used Before
            </h3>
            <p className="mt-6 mb-4 text-white text-center text-sm lg:text-base">
                Metchain functions as a decentralized blockchain
                platform, efficiently handling significant
                transaction volumes for real-time experiences
                via a customized KHeavyhash. The platform's
                objective is to promote coexistence, creation,
                and interaction in virtual worlds while supporting
                NFTs and fostering decentralized Metaverse
                interoperability and economy. With established
                Layer 1 and Layer 2 blockchains, Metchain is
                advancing towards its Layer 3 goals,
                emphasizing its role in handling high transaction
                volumes for real-time experiences and contributing
                to Metaverse interoperability.     
              </p>

          </div>

      
          {price !== null && (
            <div className="price-box mt-6 ">
              <div className="text-white text-center text-2xl lg:text-3xl">
                MetCoin Price: ${price}
              </div>
            </div>
          )}

          <div className="mb-8 lg:mb-0 px-2 flex justify-center flex-col lg:flex-row">
            <div className="mb-4 lg:mb-0 py-2 px-3 rounded-lg">
              <img
                src={feature1}
                alt="f1"
                className="w-full h-auto rounded-xl custom-border-gray"
              />
            </div>
            <div className="mb-4 lg:mb-0 py-2 px-3 rounded-lg">
              <img
                src={feature2}
                alt="f2"
                className="w-full h-auto rounded-xl custom-border-gray"
              />
            </div>
            <div className="py-2 px-3 rounded-lg">
              <img
                src={feature3}
                alt="f3"
                className="w-full h-auto rounded-xl custom-border-gray"
              />
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};
