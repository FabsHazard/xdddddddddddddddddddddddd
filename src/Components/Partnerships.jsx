import { motion } from "framer-motion";
import TwitterImg from "../assets/images/CoinStatsLogo.png";
import InstagramImg from "../assets/images/CoinGecko.jpeg";
import ContractWolfImg from "../assets/images/ContractWolf.png";

import { useState, useRef } from "react";


export const Partnerships = () => {
  const communityRef = useRef(null);

  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isTelegramHovered, setIsTelegramHovered] = useState(false);
  const [isMediumHovered, setIsMediumHovered] = useState(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);

  const handleLinkedInHover = () => {
    setIsLinkedInHovered(!isLinkedInHovered);
  };

  const handleTelegramHover = () => {
    setIsTelegramHovered(!isTelegramHovered);
  };

  const handleMediumHover = () => {
    setIsMediumHovered(!isMediumHovered);
  };

  const handleTwitterHover = () => {
    setIsTwitterHovered(!isTwitterHovered);
  };

  const handleInstagramHover = () => {
    setIsInstagramHovered(!isInstagramHovered);
  };

  const handleGithubHover = () => {
    setIsGithubHovered(!isGithubHovered);
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section ref={communityRef} id="community" className="py-12 sm:py-24 bg-customDarkBg2 w-full mt-16 mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
          <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
            <div className="w-full sm:w-full lg:w-4/5 mx-auto lg:mx-0 lg:pl-10">
              <div className="flex flex-wrap -m-4">
                {/* Add more motion.div for additional images */}
                <motion.div
                  className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                  onHoverStart={() => handleTwitterHover()}
                  onHoverEnd={() => handleTwitterHover()}
                  variants={iconVariants}
                  animate={isTwitterHovered ? "hover" : "initial"}
                >
                  <a href="https://coinstats.app/coins/metchain/" target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={TwitterImg}
                      alt="Twitter"
                      className="w-24 h-24"
                      whileHover={{ scale: 1.1 }}
                    />
                  </a>
                </motion.div>
                <motion.div
                  className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                  onHoverStart={() => handleInstagramHover()}
                  onHoverEnd={() => handleInstagramHover()}
                  variants={iconVariants}
                  animate={isInstagramHovered ? "hover" : "initial"}
                >
                  <a href="https://www.coingecko.com/en/coins/metchain" target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={InstagramImg}
                      alt="Instagram"
                      className="w-24 h-24"
                      whileHover={{ scale: 1.1 }}
                    />
                  </a>
                </motion.div>
                <motion.div
                  className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                  onHoverStart={() => handleInstagramHover()}
                  onHoverEnd={() => handleInstagramHover()}
                  variants={iconVariants}
                  animate={isInstagramHovered ? "hover" : "initial"}
                >
                  <a href="https://contractwolf.io/projects/metchain-blockchain" target="_blank" rel="noopener noreferrer">
                  <motion.img
                    src={ContractWolfImg}
                    alt="Instagram"
                    className="w-24 h-24 object-contain" // Adjusted to fit without distortion
                    whileHover={{ scale: 1.1 }}
                  />
                </a>
                </motion.div>
                
                {/* Add more motion.div elements for additional images */}
                {/* For example: */}
                {/* <motion.div
                  className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                  onHoverStart={() => handleRedditHover()}
                  onHoverEnd={() => handleRedditHover()}
                  variants={iconVariants}
                  animate={isRedditHovered ? "hover" : "initial"}
                >
                  <a href="YOUR_REDDIT_LINK_HERE" target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={RedditImg}
                      alt="Reddit"
                      className="w-24 h-24"
                      whileHover={{ scale: 1.1 }}
                    />
                  </a>
                </motion.div> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
