import { motion } from "framer-motion";
import React, { useState } from 'react';
import background1 from "../../assets/images/Background1.png";
import "../../styles/gradient.css";

export const MiningCalculator = () => {
  const [hashRate, setHashRate] = useState('');
  const [metcoinsPerDay, setMetcoinsPerDay] = useState(null);

  const calculateMetcoins = () => {
    const metcoins = (parseFloat(hashRate) * 0.05).toFixed(2); // Example calculation formula
    setMetcoinsPerDay(metcoins);
  };

  return (
    <section
      className="w-full bg-customDarkBg2 pt-32 pb-8 sm:pt-40 sm:pb-16 xl:pt-48 xl:pb-16"
      id="features"
      style={{
        backgroundImage: `url(${background1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center justify-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full mb-12 lg:mb-0">
            <div className="mx-auto lg:mb-0 w-95 sm:w-4/5 md:w-95 lg:w-unset text-center">
              <h2 className="text-xl lg:text-2xl font-bold mb-4" style={{ color: "#DCA3EF" }}>Mining Calculator</h2>
              <div className="bg-[#f1f1f1] p-6 mb-6 rounded-lg shadow-lg">
                <div className="p-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hashRate">
                    Enter Your Hash Rate (GH):
                  </label>
                  <input
                    type="number"
                    id="hashRate"
                    value={hashRate}
                    onChange={(e) => setHashRate(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <button
                    onClick={calculateMetcoins}
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4"
                  >
                    Calculate
                  </button>
                  {metcoinsPerDay !== null && (
                    <p className="text-gray-800 mt-4">
                      You will earn approximately <span className="font-bold">{metcoinsPerDay} Metcoins</span> per day.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

