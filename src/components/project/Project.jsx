import './project.css'
import Youtube from '../../img/Youtube.png'
import Link from '../../img/Link.png'

import React from 'react'

const Project = () => {
  return (
    <div className="p">
    <div className="p-left">
      {/* <div className="a-card bg"></div> */}
      {/* <div className="a-card"> */}
      <a href="">
        <img
          src={Youtube}
          alt=""
          className="p-img"
        />
        </a>
      {/* </div> */}
    </div>
    <div className="p-right">
      <h1 className="p-title">Most Recent Work</h1>
      <a href="https://suyog12345.github.io/youtubeClone/">
      <h1 className="p-sub">
        Youtube Clone &nbsp;
        <img src={Link} alt="" />
      </h1>
      </a>
      <p className="p-desc">
      Developed a Youtube Clone using ReactJs , Redux , Youtube
data API and Firebase. With having functionalities of Login
using Google , search videos , commenting on videos ,
subscribe to videos and the user’s subscribed channels.
      </p>
      
        


    </div>
  </div>
  )
}

export default Project