"use client";
import { useState } from "react";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

const NavSideBarLayout = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
    <>
      <Header isSideBarOpen={isSideBarOpen} toggleSideBar={()=>setIsSideBarOpen(!isSideBarOpen)}/>
      <div className="container-fluid page-body-wrapper">
        <Sidebar isSideBarShow={isSideBarOpen} handleClose={()=>setIsSideBarOpen(false)} />
        {children}
      </div>
    </>
  );
};

export default NavSideBarLayout;
