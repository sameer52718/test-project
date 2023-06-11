import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div>
        <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/about"}>About</Link>
    </div>
        Error</div>
  )
}

export default Error