import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React, { useState, useEffect } from 'react';
import logo from '../images/logo.webp'
import { Link } from 'react-router-dom';

function Navbar1() {

  const [data, setdata] = useState({
    data: [
      {

        title: "Epilepsy",
        url: "epilepsy-doctor-delhi",
      },
      {

        title: "Anxiety",
        url: "psychiatrist-in-delhi-for-anxiety",

      },
      {

        title: "Depression",
        url: "depression-doctor-delhi",

      },
      {

        title: "Sleep disorder",
        url: "sleep-disorder-treatment-delhi",

      },
      {

        title: "Neuropsychiatry",
        url: "neuropsychiatrist-in-delhi",
      },
      {

        title: "Headache",
        url: "migraine-headache-doctor-delhi",
      },
      {

        title: "OCD",
        url: "OCD-doctor-delhi",
      },
      {

        title: "Bipolar disorder",
        url: "bipolar-disorder-doctor-delhi",
      },
      {

        title: "Schizophrenia",
        url: "Schizophrenia-doctor-delhi",
      },
      {
        title: "Sexologist",
        url: "sexologist-delhi-ncr"
      }
    ],
  })
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  }
  const hideDropdown = e => {
    setShow(false);
  }
  const showSevier = e => {
    // if (e.detail == 2) {
      window.location = '/service'
    // }

  }
  return (
    <div className="me-2 ms-2">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to='/'>
              <img src={logo} alt='Dr Vikas Mind Clinic Logo' width={80} height={80} />

            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link className='nav-item'>
                <Link to='/' className='nav-links'>Home</Link>
              </Nav.Link>
              {/* <Nav.Link className='nav-item'>
                <Link to='/blogs' className='nav-links'>Blog</Link>
              </Nav.Link> */}
              <Nav.Link className='nav-item'>
                <Link to='/about' className='nav-links'>About</Link>
              </Nav.Link>
              <Nav.Link className='nav-item'>
                <NavDropdown title="Service" id="basic-nav-dropdown" className='nav-links' alignRight
                  show={show}
                  onDoubleClick={showSevier}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  {data.data.map((e) => (<>
                    <NavDropdown.Item><Link to={e.url} className='nav-links' >{e.title}</Link></NavDropdown.Item>
                  </>))}
                </NavDropdown>
              </Nav.Link>
              <Nav.Link className='nav-item'>
                <Link to='/contact' className='btn navbarBtn mt-4'>Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;