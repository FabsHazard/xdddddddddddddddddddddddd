import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import wallet from "../assets/images/Wallet.png";
import mining from "../assets/images/metchainmining.png";
import staking from "../assets/images/Staking.png";
import background2 from "../assets/images/Background2.png";
import React from "react";
import "../styles/imageStyles.css";

export const GetStarted = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative"

    >

      
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
                    <div className="flex justify-start items-end">

                    
                    </div>
                    <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                      Experience the full power of our analytic platform.
                    </p>

                    <div
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                      onClick={() => setIsModalOpen(true)}
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
                  <div className="flex justify-start items-end">

                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Experience the full power of our analytic platform.
                  </p>
                  </div>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
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
                  <div className="flex justify-start items-end">

                  
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Experience the full power of our analytic platform.
                  </p>

                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
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
