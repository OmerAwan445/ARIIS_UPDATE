import React from 'react'
import { FaRegMap } from "react-icons/fa";
import { PiPathBold } from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';

export const Sidebar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" href="/">
            <FaRegMap className='sidebar-icon' />
            <span className="menu-title">Map</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/aris-run">
            <PiPathBold className='sidebar-icon' />
            <span className="menu-title">Path</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/">
            <GoGraph className='sidebar-icon' />
            <span className="menu-title">Graph</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/">
            <IoIosSettings className='sidebar-icon' />
            <span className="menu-title">Setting</span>
          </Link>
        </li>
        {/* <li className="nav-item">
              <Link className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <i className="icon-layout menu-icon"></i>
                <span className="menu-title">UI Elements</span>
                <i className="menu-arrow"></i>
              </Link>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className="nav-link" href="pages/ui-features/buttons.html">Buttons</Link></li>
                  <li className="nav-item"> <Link className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</Link></li>
                  <li className="nav-item"> <Link className="nav-link" href="pages/ui-features/typography.html">Typography</Link></li>
                </ul>
              </div>
            </li> */}
        <li>
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span className='nav-link'><RxHamburgerMenu className='sidebar-icon' /></span>
          </button>
        </li>
      </ul>
    </nav>
  )
}
