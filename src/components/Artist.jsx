import React from 'react';
import sublogo1 from '/images/ethlogo.png';
import '../styles/Artist.scss';
import {artist} from '../Data';
import {motion} from 'framer-motion';

const Artist = () => {
  return (
    <div className="art">
      <motion.div
        initial={{opacity: 0, scale: 0.8}}
        whileInView={{opacity: 1, scale: 1}}
        viewport={{once: true}}
        transition={{ease: 'easeInOut', duration: 1, delay: 0.3}}
        className="title"
      >
        POPULAR ARTISTS
      </motion.div>
      <div className="artist-wrap">
        {artist.map((artist) => (
          <div key={artist.id} className="artist">
            <motion.div
              initial={{opacity: 0, scale: 0.8}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{ease: 'easeInOut', duration: 1, delay: 0.5}}
              className="image"
            >
              <img className="image-wrap" src={artist.src} alt={artist.alt} />
            </motion.div>
            <div className="artist-name">
              <motion.h3
                initial={{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{ease: 'easeInOut', duration: 1, delay: 0.7}}
              >
                {artist.name}
              </motion.h3>
              <motion.span
                initial={{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{ease: 'easeInOut', duration: 1, delay: 0.9}}
              >
                {artist.price} <img className="sublogo" src={sublogo1} alt="" />
              </motion.span>
            </div>
          </div>
        ))}
      </div>
      <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{ease: 'easeInOut', duration: 1, delay: 0.3}}
        className="view"
      >
        View all artists
      </motion.div>
    </div>
  );
};

export default Artist;
