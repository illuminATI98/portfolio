import React, { useState, useEffect} from 'react';
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { client , urlFor} from "../../client";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import "./Works.scss";

const Works = () => {
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query)
      .then((data) => setWorks(data));
  }, []);
  
  return (
    <div className='app__works app__flex'>
      <motion.div
        whileInView={{x: [200,0], opacity: [0,1]}}
        transition={{duration: 2}}
        className='app__works-title'
      >
        <h2 className='head-text'>
          <span>My</span>
          Projects
        </h2>  
      </motion.div>

      <motion.div
      whileInView={{y:[100,0],opacity:[0,1]}}
      transition={{duration: 1, delayChildren:0.5}}
      className='app__works-project'
      >
        {works.map((work, index) => (
          <div className='app__works-item app__flex' key={index}>
            <div className='app__works-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{opacity: [0,1]}}
                transition={{duration: 0.25, ease: "easeOut"}}
                className='app__works-hover app__flex'
              >
                <a href={work.projectLink} target='_blank' rel='noreffer'>
                  <motion.div
                    whileInView={{scale: [0,1]}}
                    whileHover={{scale: [1,0.9]}}
                    transition={{duration: 0.25, ease: "easeInOut"}}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target='_blank' rel='noreffer'>
                  <motion.div
                    whileInView={{scale: [0,1]}}
                    whileHover={{scale: [1,0.9]}}
                    transition={{duration: 0.25, ease: "easeInOut"}}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__works-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{marginTop:10}}>{work.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Works,"works")