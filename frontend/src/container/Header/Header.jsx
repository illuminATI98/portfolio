import React from 'react'
import './Header.scss';
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 2,
      ease: 'easeInOut'
    }
  }
}


const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x: [-100,0], opacity: [0,1]}}
        transition={{duration: 3}}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='app__flex badge-cmp'>
            <span>✌️</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Attila</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Junior Full Stack</p>
            <p className='p-text'>Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity: [0,1], y:[200,0]}}
        transition={{duration: 1, delayChildren: 0.5}}
        className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{scale: [0,1]}}
          transition={{duration: 2, ease: "easeInOut"}}
          src={images.circle}
          alt='profile-circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.csharp, images.react, images.html].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, "home")