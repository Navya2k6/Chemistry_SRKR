import React, { useState } from 'react';
import './navbar.css'
import { Link ,useLocation} from 'react-router-dom'


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu on hamburger click
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const isActive = (path) => {
      return location.pathname === path;
    };
    
    const location = useLocation();
    const isAbout = location.pathname === '/about';
    const isHods = location.pathname === '/hods';
    const aboutClass = isAbout ? 'about-page' : isHods ? 'hods-page' : '';

    const isTeaching = location.pathname === '/teaching';
    const isNonTeaching = location.pathname === '/nonTeaching';
    const facultyClass = isTeaching ? 'teach-page' : isNonTeaching ? 'nonTeach-page' : '';

    const isCrs = location.pathname === '/crs';
    const isModel = location.pathname === '/model';
    const syllabusClass = isCrs ? 'crs-page' : isModel ? 'model-page' : '';

    const isEquipment = location.pathname === '/equipment';
    const isPublications = location.pathname === '/publications';
    const isProjects = location.pathname === '/projects';
    const isEvents = location.pathname === '/events';
    const isBooks = location.pathname === '/books';
    const researchArea = location.pathname === '/researchArea';
    const researchScholars = location.pathname === '/scholars';
    const patents = location.pathname === '/patents';
    
    const researchClass = isEquipment ? 'equipment-page' :
    isPublications ? 'publications-page' :
    isProjects ? 'projects-page' :
    isEvents ? 'events-page' :
    isBooks ? 'books-page' :
    researchArea ? 'research-area-page' :
    researchScholars ? 'scholars-page' :
    patents ? 'patents-page': '';

  return (
    <div>
        <div className="head">
        <h2>Department Of Engineering Chemistry</h2>
        <h3>SRKR Engineering College</h3>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰ {/* Simple hamburger icon */}
      </div>
    {/* Navigation Menu */}
    <div className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="left">


          <div
            className={`main ho ${isActive('/') ? 'active-link' : ''}`}
            onMouseOver={(e) => (e.target.style.color = 'rgb(82, 154, 213)')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            <Link to="/">Home</Link>
          </div>


          <div className={`about  ${aboutClass}`}>  
            <div className="main">About⬇</div>
            <ul className="hov">
              <li className={location.pathname === '/about' ? 'active-link' : ''}>
                <Link to="/about">About Us</Link>
              </li>
              <li className={location.pathname === '/hods' ? 'active-link' : ''}>
                <Link to="/hods">HODs In Success</Link>
              </li>
            </ul>
          </div>

          <div className={`about  ${facultyClass}`}>  
            <div className="main">Faculty⬇</div>
            <ul className="hov">
              <li className={location.pathname === '/teaching' ? 'active-link' : ''}>
                <Link to="/teaching">Teaching</Link>
              </li>
              <li className={location.pathname === '/nonTeaching' ? 'active-link' : ''}>
                <Link to="/nonTeaching">Non-Teaching</Link>
              </li>
            </ul>
          </div>

          <div
            className={`main ho ${isActive('/courses') ? 'active-link' : ''}`}
            onMouseOver={(e) => (e.target.style.color = 'rgb(82, 154, 213)')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            <Link to="/courses">Courses</Link>
          </div>

          <div className={`about ${syllabusClass}`}>  
            <div className="main">Syllabus⬇</div>
            <ul className="hov">
            <li className={location.pathname === '/model' ? 'active-link' : ''}>
            <Link to="/model">Model Papers</Link>
              </li>
              <li className={location.pathname === '/crs' ? 'active-link' : ''}>
                <Link to="/crs">Course Material</Link>
              </li>
            </ul>
          </div>


          <div className={`about  ${researchClass}`}>  
            <div className="main">Research⬇</div>
            <ul className="hov">
            <li className={location.pathname === '/researchArea' ? 'active-link' : ''}>
                <Link to={"/researchArea"}>Research Area</Link></li>
            <li className={location.pathname === '/scholars' ? 'active-link' : ''}>
                <Link to={"/scholars"}>Research Scholars</Link></li>
            <li className={location.pathname === '/publications' ? 'active-link' : ''}>
                <Link to={"/publications"}>Research Publications</Link></li>
            <li className={location.pathname === '/patents' ? 'active-link' : ''}>
                <Link to={"/patents"}>Patents</Link></li>
            <li className={location.pathname === '/projects' ? 'active-link' : ''}>
                <Link to={"/projects"}>Projects</Link></li>
            <li className={location.pathname === '/books' ? 'active-link' : ''}>
                <Link to={"/books"}>Books Published</Link></li>
            <li className={location.pathname === '/equipment' ? 'active-link' : ''}>
                <Link to={"/equipment"}>Equipment</Link></li>
            <li className={location.pathname === '/events' ? 'active-link' : ''}>
                <Link to={"/events"}>Events</Link></li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar