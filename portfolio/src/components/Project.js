import React, { useState } from "react";
import mac_portfolio from "../assets/img/mac_portfolio.png";
import mac_portfolio_1 from "../assets/img/mac_portfolio_1.png";
import mac_portfolio_3 from "../assets/img/mac_portfolio_3.png";

import '../App.css';
export const Project = () => {
    // State to track the hovered state for each card
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projects = [
        {
            title: "TextUtils",
            description: "TextUtils is a web application built using ReactJS that provides a variety of text utilities to users. With TextUtils, users can easily convert entered text to uppercase, lowercase and user can also enable dark mode and light mode.",
            imgurl: mac_portfolio_1,
            giturl: "https://github.com/agarwal12ruch/Ruch_react/tree/main/my-app"
        },
        {
            title: "Portfolio",
            description: "Welcome to my portfolio! Designed and developed using React and CSS, this platform reflects my passion for clean, intuitive design and my proficiency in modern web development technologies.",
            imgurl: mac_portfolio,
            giturl: "https://github.com/agarwal12ruch/Portfolio"
        },
        {
            title: "Samachar",
            description: "Samachar a comprehensive platform for staying updated with the latest news and headlines, meticulously crafted using React.js with class-based components and Bootstrap for a seamless and intuitive user experience.",
            imgurl: mac_portfolio_3,
            giturl: ""
        }
    ];

    return (
        <>
            <figure className="text-center"><h1 className="main-heading">My <span className="heading">Projects</span></h1></figure>
            <div className="container my-3">
            
                <div className="row">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="col-md-4 mb-3" 
                            onMouseEnter={() => setHoveredIndex(index)} 
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{ perspective: "1000px" }}
                        >
                            <div 
                                className="card" 
                                style={{ 
                                    width: "100%", 
                                    boxShadow: "0 0 10px 5.5px rgba(128, 0, 128, 0.5)",
                                    backgroundColor: "black", 
                                    transition: "transform 0.3s", 
                                    transform: hoveredIndex === index ? "translateZ(20px)" : "none" 
                                }} 
                            >
                                <img className="card-img-top" src={project.imgurl} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ textAlign: "center", color: "purple", fontWeight: "bold" }}>{project.title}</h5>
                                    <p className="card-text" style={{ color: "white" }}>{project.description}</p>
                                    <div className="container">
                                        <a href={project.giturl} target="_blank" rel="noopener noreferrer">
                                            <button className="flex items-center justify-center py-2 px-3 rounded-lg bg-purple hover:bg-#cd5ff8">
                                                <svg stroke="purple" fill="white" strokeWidth="0" viewBox="0 0 16 16" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                                </svg>
                                                <span className="text">GitHub</span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Project


