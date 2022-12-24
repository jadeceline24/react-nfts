import React from 'react';
import '../styles/Subscribe.scss';
import {motion} from 'framer-motion';
import {company} from '../Data';

const Subscribe = () => {
  return (
    <>
      <div className="subscribe">
        <div className="left">
          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ease: 'easeInOut', duration: 1, delay: 0.2}}
            viewport={{once: true}}
          >
            Join our community and get the best NFT Collection
          </motion.p>
        </div>
        <div className="right">
          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ease: 'easeInOut', duration: 1, delay: 0.4}}
            viewport={{once: true}}
          >
            Sign up for more updates
          </motion.p>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ease: 'easeInOut', duration: 1, delay: 0.6}}
            viewport={{once: true}}
            className="sub"
          >
            <input type="email" />
            <button className="btn">Submit</button>
          </motion.div>
        </div>
      </div>
      <div className="company">
        {company.map((company) => (
          <div className="wrap">
            <motion.img
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{ease: 'easeInOut', duration: 1, delay: 0.2}}
              viewport={{once: true}}
              src={company.img}
              alt={company.alt}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Subscribe;
