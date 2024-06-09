import React, { Component } from 'react';
import resume1 from '../assets/img/resume1.jpg';

export class Resume extends Component {
  render() {
    return (
      <div className='container-resume'>
        <h1 className="heading">My Resume</h1>
        <img
          src={resume1}
          className="resume-image"
          title="Resume Document"
          alt="Resume"
        />
       <a href={resume1} download className="btn" style={{ color: "white", backgroundColor: "purple" }}>
  <i className="fa fa-download"></i> Download
    </a>

      </div>
    );
  }
}

export default Resume;
