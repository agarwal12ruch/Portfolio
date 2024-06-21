import React from 'react'
import girl from "../assets/img/bitmigi.png"
import "../App.css"
export default function About() {
  return (
   <>
   <div className="container-about">
        <div className="aboutt">
            <h2 className="me">GET TO <span className="j"> KNOW </span>ME</h2>
           <p className="intro"> Hi! I'm Ruchita Agarwal, a passionate MERN Stack Developer and Competitive Programmer. 
            I am an ECE undergraduate at the <span className="j">Indian Institute of Information Technology, Surat.</span> I am always eager to learn about new technologies and love to explore new things. My optimistic nature is the force behind my consistency and is also my biggest motivation.</p>
        </div>
        <div className="ima">
            <img src={girl} alt="" />
        </div>
   </div>
   </>
  )
}
