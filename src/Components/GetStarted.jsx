import { motion } from "framer-motion";
import wallet from "../assets/images/Wallet.png";
import mining from "../assets/images/metchainmining.png";
import staking from "../assets/images/Staking.png";
import React from "react";
import "../styles/imageStyles.css";
import miningPdf from "../assets/pdfs/mining_tutorial.pdf";

export const GetStarted = () => {
  const handleOpenNewTab = (url) => {
    const newTab = window.open(url, '_blank');
    if (newTab) {
      newTab.focus();
    }
  };
  const handleDownloadMiningPDF = () => {
    const link = document.createElement('a');
    link.href = miningPdf; // URL to the PDF file
    link.download = 'MiningTutorial.pdf'; // File name when downloaded
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };
  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Get Started
              </h2>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              {/* Pricing Box 1: Beginner */}
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <img
                    src={wallet}
                    alt="Beginner"
                    className="mb-4 rounded-md image-container"
                    style={{ width: '500px', height: 'auto' }}
                  />
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Experience the new Wallet.
                  </p>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => handleOpenNewTab('https://metwallet.metchain.tech/vec/')}
                  >
                    Get the Wallet
                  </div>
                </div>
              </div>

              {/* Pricing Box 2: Standard */}
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                  <img
                    src={mining}
                    alt="Beginner"
                    className="mb-4 rounded-md image-container"
                  />
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Get on board to get mining rewards.
                  </p>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={handleDownloadMiningPDF}

                  >
                    Start Mining
                  </div>
                </div>
              </div>

              {/* Pricing Box 3: Premium */}
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <img
                    src={staking}
                    alt="Beginner"
                    className="mb-4 rounded-md image-container"
                  />
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Experience the full power of our staking platform.
                  </p>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => handleOpenNewTab('https://metwallet.metchain.tech/vec/')}
                  >
                    Start Staking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
