import { React , useState } from 'react'
import "./Navbar.scss";
import { images } from "../../constants";
import {HiMenu, HiX} from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {["home", "about", "works", "skills", "contact"].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenu onClick={() => setToggle(true)}/>
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{duration: 1, ease: "easeOut"}}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className='app__navbar-links'>
              {["home", "about", "works", "skills", "contact"].map((item) => (
                <li key={`link-${item}`}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
                ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar