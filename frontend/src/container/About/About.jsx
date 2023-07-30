import React from 'react'
import './About.scss';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id='about' className='app__about app__flex'>
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
          <p className='p-text'>
          During my CodeCool journey, I have gained a solid foundation in software development principles, including proficiency in programming languages such as JavaScript, React.js, C# and familiarity with the .NET framework. I have acquired hands-on experience with various tools and technologies used in the field, including JetBrains Rider, Visual Studio and other development environments. 
          </p>
        </div>
        <div className='circle-codecool'>
        </div>
      </motion.div>
    </div>
  )
}

export default About