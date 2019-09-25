import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <div>
      <Link to='/aboutme'>About Me</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default NavBar;