import React, { useState } from 'react';
import './home.css'
import mainVid from '../../images/mainVid.mp4'
import resm1 from '../../images/resm1.jpeg'
import che1 from '../../images/che1.jpg'
import Navbar from '../navbar/navbar';
import corsm1 from '../../images/corsm1.jpeg'
import facm1 from '../../images/facm1.png'
import sylm1 from '../../images/sylm1.jpg'
import s4 from '../../images/s4.jpg'
import { Link } from 'react-router-dom';
import Contact from '../contact/Contact.js';

const Home = () => {
 
  return (
    <div>
     
      <Navbar/>


      {/* Video Section */}
      <div className="vid_container">
        <video autoPlay loop playsInline>
          <source className='scv' src={mainVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>



      {/* About Us Section */}
      <h2 className='abh' style={{ textAlign: 'center' }}><u>About Us:</u></h2>
      <div className="abt1">
        <div className='abt2'>
        <div className='fittxt'>
        Department of Engineering Chemistry was established at the very inception of the college in 1980. 
            The objectives of the department are to train and orient the engineering entrants towards 
            experimentation and required scientific skills. The well-qualified faculty of the department 
            carry forward various functions/activities that are interwoven with multidisciplinary aspects 
            that bring science to the society.
        </div>
        </div>
        <div>
          <img src={che1} alt="Department of Chemistry" />
        </div>
      </div>

<h2 className='tfh'>
  We have...
</h2>

      <div className='tryy'>
    <Link to="/researchArea">
  <div className='tryysub'>
  <img src={resm1}/>
  <p>Research Area</p>
  </div>
  </Link>
  <Link to="/crs">
  <div className='tryysub'>
  <img src={sylm1}/>
  <p>Syllabus</p>
  </div>
  </Link>
  <Link to="/courses">
  <div className='tryysub'>
  <img src={corsm1}/>
  <p>Courses</p>
  </div>
  </Link>
  <Link to="/events">
  <div className='tryysub'>
  <img src={s4}/>
  <p>Events</p>
  </div>
  </Link>
  <Link to="/teaching">
  <div className='tryysub'>
  <img src={facm1}/>
  <p>Faculty</p>
  </div>
  </Link>
</div>
<div className='crnrs'>
  <div className='studentc'>
  <div>
  <h2 className='forh' style={{ textAlign: 'center' }}>Student Corner:</h2>
  </div>
    <div className='elem'>
      <a href="https://drive.google.com/drive/folders/1dNYZpkKnQ-8pNKwVeA2wVUcXLt-13YDL?usp=drive_link" target="_blank">
        <div style={{cursor:'pointer'}} target="_blank" className="studentp" >        
            Student Presentations
        </div>
      </a>
      <div style={{cursor:'pointer'}} className="studente" >
          <Link to="/events">Events</Link>
      </div>
    </div>
  </div>
  <div className='facultyc'>
  <div>
  <h2 className='forh' style={{ textAlign: 'center' }}>Faculty Corner:</h2>
  </div>
      <a href='https://drive.google.com/drive/folders/1MTxAOsZrMa7Du2clvCFoppbf8zw5TCSa?usp=sharing' target='_blank'>
      <div style={{cursor:'pointer'}} className="facultyl" target="_blank">        
      Faculty Lectures
    </div>
    </a>
  </div>
</div>
<Contact/>
    </div>
  )
}

export default Home