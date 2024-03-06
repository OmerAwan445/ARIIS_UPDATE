import Image from 'next/image';
import Link from 'next/link';
import { CiBellOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from 'react-icons/rx';
import Avatar from "../../../public/DummyData/Images/Avatar menu button.png";
import logo from "../../../public/images/logo.png";
import SidebarMobile from '../Sidebar/SidebarMobile';
export const Header = () => {

    const handleShow = () => {
      console.log('Handle show from SidebarMobile');
      // You can add any logic you want to execute when the SidebarMobile is shown
    };

  return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row flex-nowrap">
        <div className="text-center ms-4">
          <Link className="mr-5" href="/">
          <Image src={logo} className="mr-2" alt="logo" width={100} height={50} />
          </Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <ul className="navbar-nav mr-lg-2">
            <li className="nav-item nav-search d-none d-lg-block">
              <div className="input-group">
                <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                  <span className="input-group-text" id="search">
                    <FaSearch className="icon-search"/>
                  </span>
                </div>
                <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now"
                  aria-label="search" aria-describedby="search"/>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item dropdown">
              <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#"
                data-toggle="dropdown">
                <CiBellOn className="icon-bell mx-0" />
                <span className="count"></span>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="notificationDropdown">
                <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      <i className="ti-info-alt mx-0"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">Application Error</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      Just now
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning">
                      <i className="ti-settings mx-0"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">Settings</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      Private message
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-info">
                      <i className="ti-user mx-0"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">New user registration</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      2 days ago
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item nav-profile dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                <Image src={Avatar} alt="profile" />
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                <a className="dropdown-item">
                  <i className="ti-settings text-primary"></i>
                  Settings
                </a>
                <a className="dropdown-item">
                  <i className="ti-power-off text-primary"></i>
                  Logout
                </a>
              </div>
            </li>
            <li className="nav-item nav-settings d-none d-lg-flex">
              <a className="nav-link" href="#">
                <i className="icon-ellipsis"></i>
              </a>
            </li>
          </ul>
        
            {/* <RxHamburgerMenu className='navbar-toggler-icon'/> */}
        <SidebarMobile handleShow={handleShow} />
        </div>
    </nav>
  )
}
