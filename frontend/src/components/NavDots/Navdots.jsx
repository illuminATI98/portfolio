import React from 'react'

const NavDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
          <a
          href={`#${item}`}
          key={item + index}
          className='app__navigation-dot'
          style={active === item ? {backgroundColor: "#5fd1a1" } : {}}
          />
        ))}
    </div>
  )
}

export default NavDots