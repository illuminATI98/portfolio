import React, { useState, useEffect} from 'react';
import { client , urlFor} from "../../client";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";

import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query)
      .then((data) => setSkills(data));
  }, []);


  return (
    <div className='app__skills app__flex'>
      <motion.div
        whileInView={{x: [-200,0], opacity: [0,1]}}
        transition={{duration: 2}}
        className='app__skills-title'
      >
        <h2 className='head-text'>
          Tech
          <span>Skills</span>      
        </h2>  
      </motion.div>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{opacity:[0,1]}}
              transition={{duration: 0.5}}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{background:skill.background}}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(Skills, "skills")