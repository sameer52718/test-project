import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
          <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/about"}>About</Link>
    </div>
        Home</div>
  )
}

export default Home