import React from 'react';
import '../styles/Main.scss';
import sublogo1 from '/images/ethlogo.png';
import sublogo2 from '/images/flow-flow-logo.png';
import sublogo3 from '/images/solana-sol-logo.png';
import video from '/images/main.mp4';
import {motion} from 'framer-motion';

const container = {
  show: {
    duration: 5,
    transition: {staggerChildren: 0.1, delayChildren: 0.4},
  },
};

const Main = () => {
  return (
    <motion.div variants={container} className="main">
      <div className="main-wrap">
        <div className="main-left">
          <div className="subtitle">
            <motion.div
              initial={{opacity: 0, x: -80}}
              animate={{opacity: 1, x: 0}}
              transition={{ease: 'easeInOut', duration: 1, delay: 0.1}}
              className="sub-wrap"
            >
              <img className="sublogo" src={sublogo1} alt="" />
              <span>ETHEREUM</span>
              <img className="sublogo" src={sublogo2} alt="" />
              <span>FLOW</span>
              <img className="sublogo" src={sublogo3} alt="" />
              <span>SOLANA</span>
            </motion.div>
          </div>
          <div className="title">
            <motion.h1
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{ease: 'easeInOut', duration: 1, delay: 0.1}}
            >
              COLLECT & TRADE HOLOGRAM NFTS{' '}
            </motion.h1>
          </div>
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{ease: 'easeInOut', duration: 1, delay: 0.3}}
            className="desc"
          >
            <p>
              The best marketplace for high-end collectors. Now anyone can own
              digital assets. Collect, buy and sell arts from more than 20k
              artists.
            </p>
          </motion.div>
          <div className="btn">
            <motion.button
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{ease: 'easeInOut', duration: 1, delay: 0.4}}
              className="button"
            >
              <span>Get Started</span>
            </motion.button>
          </div>
        </div>
        <div className="main-right">
          <motion.video
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            transition={{ease: 'easeInOut', duration: 2, delay: 0.2}}
            className="main-vid"
            type="video/mp4"
            src={video}
            autoPlay
            muted
            loop
          ></motion.video>

          <motion.div
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            transition={{ease: 'easeIn', duration: 2}}
            className="holo"
          >
            <div className="holo-title">
              <h3>HOLOGRAPHIC HEAD</h3>
              <li>#3D #HOLO #NEW</li>
            </div>

            <div className="holo-desc">
              <h3>LAST BID</h3>
              <li>
                2.57 ETH <img className="sublogo" src={sublogo1} alt="" />
              </li>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
