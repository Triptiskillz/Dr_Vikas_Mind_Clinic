import React, { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom';

import logo from '../images/logo.webp'
import { Link } from 'react-router-dom';

function Navbar() {


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
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false)
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  console.log(data.data)

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        {/* <div className="navbar_container"> */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> <img src={logo} alt='Dr Vikas Mind Clinic Logo' width={100} height={100} />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to='/service' className='nav-links' onClick={closeMobileMenu}> Service</Link>
          </li>


          <div className="dropdown">
            <button onClick={handleOpen}>Services</button>
            {open ? (
              <ul className="menu">
                {data.data.map((e) => (<>
                  <li className="menu-item">
                    <Link to={e.url} className="text-decoration-none">{e.title}</Link>
                  </li>
                </>))}
              </ul>
            ) : null}

          </div>
       

          <li className="nav-item">
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
          </li>

          <li className="nav-item">
            <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>Gallery</Link>
          </li>

          <li className="nav-item">
            <Link to='/contact' className='btn navbarBtn  mt-2'>Contact</Link>
          </li>

        </ul>
        {/* </div> */}
      </nav>
    </>
  )
}

export default Navbar
