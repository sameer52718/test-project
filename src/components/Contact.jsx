import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        
        <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/about"}>About</Link>
    </div>
        Contact</div>
  )
}

export default Contact