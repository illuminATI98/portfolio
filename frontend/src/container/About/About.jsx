import React from 'react'
import './About.scss';
import { motion } from "framer-motion";
import { AppWrap } from '../../wrapper';

const About = () => {
  return (
    <div className='app__about app__flex'>
      <motion.div
        whileInView={{x: [-100,0], opacity: [0,1]}}
        transition={{duration: 3}}
        className='app__about-title'
      >
        <h2 className='head-text'>
          About
          <span>Me</span>
        </h2>  
      </motion.div>

      <motion.div
        whileInView={{x: [100,0], opacity: [0,1]}}
        transition={{duration: 2}}
        className='app__about-info'
      >
        <div className='app__about-description'>
          <p className='bold-text'>
          During my <span>CodeCool</span> journey, I have gained a solid foundation in software development principles, including proficiency in programming languages such as <span>JavaScript, React.js, C#</span> and familiarity with the <span>.NET framework</span>. I have acquired hands-on experience with various tools and technologies used in the field, including <span>JetBrains Rider, Visual Studio</span> and other development environments. 
          </p>
        </div>
        <div className='circle-codecool'>
        </div>
      </motion.div>
    </div>
  )
}

export default AppWrap(About, "about")