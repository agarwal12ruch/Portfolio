import React from "react";
import { useState,useEffect } from "react";

import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import { Nav } from 'react-bootstrap';
import logo from "../assets/img/logo.png"
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import linkedin from "../assets/img/linkedin.svg";
import { Link } from 'react-router-dom'


export const NavBar=()=> {
  const [activelink,setactivelink]=useState('home');
  const [scrolled,setscrolled]=useState(false);
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
    <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo"/>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav"> 

<Nav className="me-auto">
  <Nav.Link as={Link} to="/" className={activelink==='home'?'active navbar-link':'navbar-link'} onClick={()=> onupdateactivelink('home')}>Home</Nav.Link>
  <Nav.Link as={Link} to="/projects" className={activelink==='Projects'?'active navbar-link':'navbar-link'} onClick={()=> onupdateactivelink('Projects')}>Projects</Nav.Link>
  <Nav.Link as={Link} to="/resume" className={activelink==='Resume'?'active navbar-link':'navbar-link'} onClick={()=> onupdateactivelink('Resume')}>Resume</Nav.Link>
</Nav>

        <span className="navbar-text">
          <div className="social-icon">
            <a href="#"><img src={instagram}  /></a>
            <a href="#"><img src={facebook}  /></a>
            <a href="https://www.linkedin.com/in/ruchita-agarwal-7b1067266/"><img src={linkedin} alt="linkedin" /></a>
          </div>
          <button className="xyz" onClick={()=> console.log("connect")}><span>Lets connect</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}