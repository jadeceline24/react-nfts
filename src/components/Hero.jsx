import React from 'react';
import sublogo1 from '/images/ethlogo.png';
import '../styles/Hero.scss';
import {nfts} from '../Data';
import {motion} from 'framer-motion';
const container = {
  show: {},
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-title">
        <motion.h1
          initial={{opacity: 0, scale: 0.8}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true}}
          transition={{ease: 'easeInOut', duration: 1, delay: 0.3}}
        >
          COLLECT & SELL SUPER RARE NFTS
        </motion.h1>
        <div className="hero-title-wrap">
          <motion.div
            initial={{opacity: 0, scale: 0.8}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{ease: 'easeInOut', duration: 1, delay: 0.5}}
            className="hero-subtitle"
          >
            <h4>27K+</h4>
            <span>Artist</span>
          </motion.div>
          <motion.div
            initial={{opacity: 0, scale: 0.8}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{ease: 'easeInOut', duration: 1, delay: 0.7}}
            className="hero-subtitle"
          >
            <h4>12K+</h4>
            <span>Artwork</span>
          </motion.div>
          <motion.div
            initial={{opacity: 0, scale: 0.8}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{ease: 'easeInOut', duration: 1, delay: 0.9}}
            className="hero-subtitle"
          >
            <h4>22K+</h4>
            <span>Auction</span>
          </motion.div>
        </div>
      </div>
      <div className="nft">
        {nfts.map((nft) => (
          <motion.div
            transition={{delayChildren: 0.4, staggerChildren: 0.5}}
            key={nft.id}
            className="nft-wrap"
          >
            <div className="nft-image">
              <motion.video
                initial={{opacity: 0, y: 150}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transtion={{ease: [0.175, 0.885, 0.32, 1.275]}}
                src={nft.src}
                autoPlay
                muted
                loop
                alt={nft.alt}
              ></motion.video>
            </div>
            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transtion={{ease: [0.175, 0.885, 0.32, 1.275], duration: 1}}
              className="nft-title"
            >
              <h3>{nft.title}</h3>
              <div className="nft-subtitle">
                <span>
                  {nft.price}
                  <img className="sublogo" src={sublogo1} alt="" />
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transtion={{ease: [0.175, 0.885, 0.32, 1.275], duration: 1}}
              className="nft-btn"
            >
              <button className="button">
                <span>{nft.btn}</span>
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
