import { motion } from "framer-motion";
import { CheckArrowIcon } from "../../assets/icons/CheckArrowIcon";
import EVM from "../../assets/images/EVM_v2.svg";
import metaverse from "../../assets/images/metaverse_v2.svg";
import algorithm from "../../assets/images/hexes.svg";
import metcoins from "../../assets/images/coins.png";
import trading from "../../assets/images/trading.png";
import React from "react";
import "../../styles/imageStyles.css";
import "./technology.scss";
import Article from "./Article";

export const Technology = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const articles = [
    {
      title : "EVM Compatibility",
      image : EVM,
      description : `Metchain is an EVM-compatible chain, enabling seamless integration with Ethereum-based tools and protocols.`,
    },
    {
      title : "Metaverse Development Tools",
      image : metaverse,
      description : `Metchain provides developers with a comprehensive set of tools to create their own virtual worlds and experiences.`,
    },
    {
      title : "Evolved Heavyhash algorithm",
      image : algorithm,
      description : `Metchain is built on a modified Heavyhash algorithm, which enables low-impact, high-speed, and secure transactions.`,
    },
    {
      title : "Metaswap trading protocol",
      image : trading,
      description : `Metaswap is Metchain's native trading protocol, empowering users to establish liquidity pools, execute decentralized 
      exchanges, and stake tokens.`,
    },
  ]

  return (
    <section id="Technology-section" 
    style={{
    margin: 0, // Ensure zero margin
    padding: 0, // Ensure zero padding
  }}
    >
      <div className="title ">
        <h1>Technology</h1>
        <p> What makes Metchain Interesting?</p>
      </div>
      <div className="Articles">
        {articles.map((article, index) => (
          <Article key={index} {...article} reversed={index%2===1} />
        ))}
      </div>

    </section>
  );
};