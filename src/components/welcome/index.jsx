import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Welcome = () => {
  return (
    <div className="main-wrapper">
     <h1 className='title'>Welcome !</h1>
     <br />
     <br />
    <Link to="/posts"> <button className='post-btn'>Posts</button></Link>
    </div>
  )
}

export default Welcome