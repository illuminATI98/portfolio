import React, { useState, useEffect} from 'react';
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Works.scss";

const Works = () => {
  return (
    <div id='works' className='app__works'>
      <motion.div
        whileInView={{x: [300,0], opacity: [0,1]}}
        transition={{duration: 2}}
        className='app__works-title'
      >
        <h2 className='head-text'>
          <span>My</span>
          Projects
        </h2>  
      </motion.div>
    </div>
  )
}

export default Works