import React, { useState } from 'react';
import './model.css'


import { Link } from 'react-router-dom';
import Navbar from '../../navbar/navbar';

const Model = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSyllabus1Open, setIsSyllabus1Open] = useState(false);
  const [isSyllabus2Open, setIsSyllabus2Open] = useState(false);
  const [isSyllabus3Open, setIsSyllabus3Open] = useState(false);
  const [isSyllabus4Open, setIsSyllabus4Open] = useState(false);
  const [isSyllabus5Open, setIsSyllabus5Open] = useState(false);

  const toggleSyllabus1 = () => {
    console.log("Toggle Syllabus1 Clicked!");
    setIsSyllabus1Open(!isSyllabus1Open);
  };
  const toggleSyllabus2 = () => {
    console.log("Toggle Syllabus2 Clicked!");
    setIsSyllabus2Open(!isSyllabus2Open);
  };
  const toggleSyllabus3 = () => {
    console.log("Toggle Syllabus3 Clicked!");
    setIsSyllabus3Open(!isSyllabus3Open);
  };
  const toggleSyllabus4 = () => {
    console.log("Toggle Syllabus4 Clicked!");
    setIsSyllabus4Open(!isSyllabus4Open);
  };
  const toggleSyllabus5 = () => {
    console.log("Toggle Syllabus5 Clicked!");
    setIsSyllabus5Open(!isSyllabus5Open);
  };


  return (
 <div>
      <Navbar/>

      <header className='hedr'>
            <center>
                <h1 className="headng"><u>SYLLABUS & MODEL PAPERS</u></h1>
            </center>
        </header>
    
   



        <div>
        <div style={{ paddingBottom: '10px' }}></div>
        <div id="cont2">
          <p className="para2" id="para2" onClick={toggleSyllabus1} style={{ cursor: 'pointer' }}>
            &ensp;&ensp;↪ &ensp;R-23 REGULATION CHEMISTRY SYLLABUS AND MODEL PAPERS
          </p>
<div className='cont3'>
{isSyllabus1Open && (
            <table border="1px" className="table1" >
              <thead>
                <tr>
                  <th>REGULATION</th>
                  <th>DEGREE</th>
                  <th>COURSE NAME</th>
                  <th>SYLLABUS</th>
                  <th>MODEL PAPERS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>R-23</th>
                  <th style={{ fontWeight: 100 }}>B.TECH</th>
                  <th style={{ fontWeight: 100 }}>CHEMISTRY</th>
                  <th>
                    <a
                      href="https://drive.google.com/file/d/1DyIm7gwLB_qzrwAMic9DWqWpIpsSf6Xw/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I Year Syllabus
                    </a>
                  </th>
                  <th>
                    <a
                      href="https://drive.google.com/file/d/1GxIZaj_DLuOfHlt01f1-xsQtFz9vpIiW/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I Year Model Papers
                    </a>
                  </th>
                </tr>
                <tr>
                  <th>R-23</th>
                  <th style={{ fontWeight: 100 }}>B.TECH</th>
                  <th style={{ fontWeight: 100 }}>CHEMISTRY LAB</th>
                  <th>
                    <a
                      href="https://drive.google.com/file/d/1kWQaIvm8a-64NTAFrblL9Cytck79YpCc/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I Year Syllabus
                    </a>
                  </th>
                  <th>-</th>
                </tr>
              </tbody>
            </table>
          )}
</div>
          {/* Toggle content based on click */}
        
        </div>
      </div>


      <div>
        <div style={{ paddingBottom: '10px' }}></div>
        <div id="cont2">
          <p className="para2" id="para2" onClick={toggleSyllabus2} style={{ cursor: 'pointer' }}>
            &ensp;&ensp;↪ &ensp;R-20 REGULATION APPLIED CHEMISTRY SYLLABUS AND MODEL PAPERS
          </p>
<div className='cont3'>
{isSyllabus2Open && (
            <table border="1px" className="table1" >
              <thead>
                <tr>
                  <th>REGULATION</th>
                  <th>DEGREE</th>
                  <th>COURSE NAME</th>
                  <th>SYLLABUS</th>
                  <th>MODEL PAPERS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>R-20</th>
                  <th style={{ fontWeight: 100 }}>B.TECH</th>
                  <th style={{ fontWeight: 100 }}>APPLIED CHEMISTRY</th>
                  <th>
                    <a
                      href="https://drive.google.com/file/d/1f3mvftpLsrrDwypAJepqQgjVIfdjx81w/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I Year Syllabus
                    </a>
                  </th>
                  <th>
                    <a
                      href="https://drive.google.com/file/d/1AucLL026OQ5Z0MgVw8yF0BqmepsqR9Gx/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I Year Model Papers
                    </a>
                  </th>
                </tr>
                <tr>
                  <th>R-20</th>
                  <th style={{ fontWeight: 100 }}>B.TECH</th>
                  <th style={{ fontWeight: 100 }}>APPLIED CHEMISTRY LAB</th>
                  <th>
                    <a
                      href="https://drive.google.com/file/d/1RZBXfX1Os9PmQiOeDM-_B75XVE17dBxC/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I Year Syllabus
                    </a>
                  </th>
                  <th>-</th>
                </tr>
              </tbody>
            </table>
          )}
</div>
          {/* Toggle content based on click */}
        
        </div>
      </div>

      <div>
        <div style={{ paddingBottom: '10px' }}></div>
        <div id="cont2">
          <p className="para2" id="para2" onClick={toggleSyllabus3} style={{ cursor: 'pointer' }}>
            &ensp;&ensp;↪ &ensp;R-19 REGULATION ENGINEERING CHEMISTRY SYLLABUS AND MODEL PAPERS
          </p>
<div className='cont3'>
{isSyllabus3Open && (
            <table border="1px" className="table1" >
              <thead>
                <tr>
                  <th>REGULATION</th>
                  <th>DEGREE</th>
                  <th>COURSE NAME</th>
                  <th>SYLLABUS</th>
                  <th>MODEL PAPERS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>R-19</th>
                  <th style={{ fontWeight: 100 }}>B.TECH</th>
                  <th style={{ fontWeight: 100 }}>ENGINEERING CHEMISTRY</th>
                  <th>
                    <a
                      href="https://drive.google.com/file/d/14daqdWuspZI51zrzZz6uL2Tzsv8Dv15j/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I Year Syllabus
                    </a>
                  </th>
                  <th>
                    <a
                      href="https://drive.google.com/file/d/1KdxYMQbcmjt-j2bXf6qBJRtxnbawZK-k/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I Year Model Papers
                    </a>
                  </th>
                </tr>
                <tr>
                  <th>R-19</th>
                  <th style={{ fontWeight: 100 }}>B.TECH</th>
                  <th style={{ fontWeight: 100 }}>ENGINEERING CHEMISTRY LAB</th>
                  <th>
                    <a
                      href="https://drive.google.com/file/d/1EA75FXSpj8AodKdWOCm0v0LWEHqapqXA/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I Year Syllabus
                    </a>
                  </th>
                  <th>-</th>
                </tr>
              </tbody>
            </table>
          )}
</div>
          {/* Toggle content based on click */}
     
        </div>
      </div>


      <div>
        <div style={{ paddingBottom: '10px' }}></div>
        <div id="cont2">
          <p className="para2" id="para2" onClick={toggleSyllabus4} style={{ cursor: 'pointer' }}>
            &ensp;&ensp;↪ &ensp;R-17 REGULATION ENGINEERING CHEMISTRY SYLLABUS AND MODEL PAPERS
          </p>
<div className='cont3'>
{isSyllabus4Open && (
            <table border="1px" className="table1" >
              <thead>
                <tr>
                  <th>REGULATION</th>
                  <th>DEGREE</th>
                  <th>COURSE NAME</th>
                  <th>SYLLABUS</th>
                  <th>MODEL PAPERS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>R-20</th>
                  <th style={{ fontWeight: 100 }}>B.TECH</th>
                  <th style={{ fontWeight: 100 }}>ENGINEERING CHEMISTRY</th>
                  <th>
                    <a
                      href="https://drive.google.com/file/d/1wSq0pobMCvbARjrKCcvBPl33twecVWub/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I Year Syllabus
                    </a>
                  </th>
                  <th>
                    <a
                      href="https://drive.google.com/file/d/1wSq0pobMCvbARjrKCcvBPl33twecVWub/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I Year Model Papers
                    </a>
                  </th>
                </tr>
                <tr>
                  <th>R-17</th>
                  <th style={{ fontWeight: 100 }}>B.TECH</th>
                  <th style={{ fontWeight: 100 }}>APPLIED CHEMISTRY LAB</th>
                  <th>
                    <a
                      href="https://drive.google.com/file/d/1EA75FXSpj8AodKdWOCm0v0LWEHqapqXA/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I Year Syllabus
                    </a>
                  </th>
                  <th>-</th>
                </tr>
              </tbody>
            </table>
          )}
</div>
          {/* Toggle content based on click */}
        
        </div>
      </div>



      <div>
        <div style={{ paddingBottom: '10px' }}></div>
        <div id="cont2">
          <p className="para2" id="para2" onClick={toggleSyllabus5} style={{ cursor: 'pointer' }}>
            &ensp;&ensp;↪ &ensp;R-16 REGULATION CHEMISTRY SYLLABUS AND MODEL PAPERS
          </p>
<div className='cont3'>
{isSyllabus5Open && (
            <table border="1px" className="table1" >
              <thead>
                <tr>
                  <th>REGULATION</th>
                  <th>DEGREE</th>
                  <th>COURSE NAME</th>
                  <th>SYLLABUS</th>
                  <th>MODEL PAPERS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>R-16</th>
                  <th style={{ fontWeight: 100 }}>B.TECH</th>
                  <th style={{ fontWeight: 100 }}>CHEMISTRY</th>
                  <th>
                    <a
                      href="https://drive.google.com/file/d/1WPIZJe7CmlC4sEsuhpdDTGilTvJwI1ac/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I Year Syllabus
                    </a>
                  </th>
                  <th>
                    <a
                      href="https://drive.google.com/file/d/1S08wGrPMuTRU92LENKDBIhud8uLRmkKA/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I Year Model Papers
                    </a>
                  </th>
                </tr>
                <tr>
                  <th>R-16</th>
                  <th style={{ fontWeight: 100 }}>B.TECH</th>
                  <th style={{ fontWeight: 100 }}>CHEMISTRY LAB</th>
                  <th>
                    <a
                      href="https://drive.google.com/file/d/1CAsHI7zkUXOHh3XNMRVXegRXbATYYnMs/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I Year Syllabus
                    </a>
                  </th>
                  <th>-</th>
                </tr>
              </tbody>
            </table>
          )}
</div>
          {/* Toggle content based on click */}
      
        </div>
      </div>

      </div>

  );
};

export default Model;