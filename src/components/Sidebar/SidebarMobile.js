import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RxHamburgerMenu, RxWidth } from 'react-icons/rx';
import { FaRegMap } from "react-icons/fa";
import { PiPathBold } from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import Link from 'next/link';



const SidebarMobile = ({ handleShow }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOffcanvasShow = () => {
    setShow(true);
    if (handleShow) {
      handleShow(); // Call the handleShow function passed from the parent
    }
  };

  return (
    <>
      <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
        onClick={handleOffcanvasShow}  >
            <RxHamburgerMenu className='navbar-toggler-icon'/>
          </button>

      <Offcanvas show={show} style={{
  background: "#374151",
  fontFamily: "Nunito, sans-serif",
  fontWeight: "500",
  padding: '0',

      }} onHide={handleClose}>
        <Offcanvas.Header >
           <p onClick={handleClose} className="col-12 d-flex justify-content-end mb-3"><span className="close" style={{color:'white'}}>X</span></p>
        </Offcanvas.Header>
        <Offcanvas.Body className='sidebar' style={{boxShadow:'none'}}>
        <nav className="" id="sidebar">
      <ul className="nav d-flex flex-column justify-content-between" style={{fontSize:"20px !important"}} >
        <li className="nav-item" >
          <a className="nav-link" href="/">
            <FaRegMap className='sidebar-icon fs-3' />
            <span className="menu-title p-3 fs-4"  >Map</span>
          </a>
        </li>
        <li className="nav-item" >
          <Link className="nav-link" href="/aris-run">
            <PiPathBold className='sidebar-icon fs-3'/>
            <span className="menu-title p-3 fs-4"  >Path</span>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <GoGraph className='sidebar-icon fs-3' />
            <span className="menu-title p-3 fs-4"  >Graph</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" >
            <IoIosSettings className='sidebar-icon fs-3' />
            <span className="menu-title p-3 fs-4"  >Setting</span>
          </a>
        </li>
        <li className="nav-item">
          <span className="nav-link"></span>
        </li>
        {/* <li>
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span className='nav-link'><RxHamburgerMenu className='sidebar-icon fs-3' /></span>
          </button>
        </li> */}
      </ul>
    </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SidebarMobile;
