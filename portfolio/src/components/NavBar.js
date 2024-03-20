import React from "react";
import { useState,useEffect } from "react";

import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import { Nav } from 'react-bootstrap';
import ghost from "../assets/img/ghost.svg";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import linkedin from "../assets/img/linkedin.svg";

export const NavBar=()=> {
  const {activelink,setactivelink}=useState('home');
  const {scrolled,setscrolled}=useState(false);
  useEffect (()=>{
    const onScroll=()=>{
    if(window.scrollY>50){
      setscrolled(true);
    }
    else{
      setscrolled(false);
    }
  }
  window.addEventListener("scroll",onScroll);
  return ()=> window.removeEventListener("scroll",onScroll)
  },[])

const onupdateactivelink=(value)=>{
  setactivelink(value);
}

return (
  <Navbar expand="lg" className={scrolled?"scrolled":""}>
    <Container>
      <Navbar.Brand href="#home"
      img src={ghost} alt="logo">LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activelink==='home'?'active navbar-link':'navbar-link'} onClick={()=> onupdateactivelink('home')}>Home</Nav.Link>
          <Nav.Link href="#Projects" className={activelink==='Projects'?'active navbar-link':'navbar-link'} onClick={()=> onupdateactivelink('Projects')}>Projects</Nav.Link>
          <Nav.Link href="#Resume" className={activelink==='Resume'?'active navbar-link':'navbar-link'} onClick={()=> onupdateactivelink('Resume')}>Resume</Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="#"><img src={instagram} alt="" /></a>
            <a href="#"><img src={facebook} alt="" /></a>
            <a href="#"><img src={linkedin} alt="" /></a>
          </div>
          <button className="xyz" onClick={()=> console.log("connect")}><span>Lets connect</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}