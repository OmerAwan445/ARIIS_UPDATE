import { FaArrowCircleDown } from "react-icons/fa";
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { greenpriority, highpriority, midpriority } from "@/app/api";
import ModalMap from "../Modal/ModalMap";
import ArisRunModal from "../Modal/ArisRunModal";
import { AriisRunTableData } from "@/DummyData";


const LocationSidebarMbl = ({handleShow}) => {

    const [showModal,setShowModal] = useState(false)
    const handleModalShow = () => {
        setShowModal(true);
    }
    const handleModalClose = () =>{
        setShowModal(false);
    }

    const [isShowArisRunIdModal, setIsShowArisRunIdModal] = useState(false);
  const [isShowArisRunModal, setIsShowArisRunModal] = useState(false);
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
         onClick={handleOffcanvasShow}>
            <FaArrowCircleDown className='navbar-toggler-icon'/>
          </button>

          <Offcanvas show={show} onHide={handleClose} 
          backdropClassName="false" style={{
  background: "#111826",
  fontFamily: "Nunito, sans-serif",
  fontWeight: "500",
  padding: '0',
//   marginTop: 'calc(60px)' 
      }}
      className=""> 
       <Offcanvas.Header className="p-0 mt-2" >
           <p onClick={handleClose} className="col-12 d-flex justify-content-end"><span className="close" style={{color:'white'}}>X</span></p>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="content-wrapper " style={{background:"#111826"}}>
        <div className="row">
          <ModalMap
            handleOpenArisRunModal={()=> setIsShowArisRunModal(true)}
            show={showModal}
            handleClose={handleModalClose}
            title="Section ID #G00002"
          />
          <ArisRunModal
          show={isShowArisRunModal}
          tableData={AriisRunTableData}
          handleClose={()=> setIsShowArisRunModal(false)}
          />


          <div className="p-0">
          <div class="d-flex align-items-center justify-content-between" style={{height:"calc(100vh - 60px)"}}>
            <div class="d-flex h-100 flex-column w-100">
              <div class="filterone h-100 w-100 overflow-y-scroll">
              <button className="sticky-top">High priority sections</button>
              <ul className="priortySection">
                    {highpriority.map((record, index) => (
                    <li onClick={() => handleModalShow()} key={index}>
                      {record?.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div class="filtertwo h-100 w-100 overflow-y-scroll">
              <button className="sticky-top">Mid priority sections</button>
              <ul className="priortySection">
                  {midpriority?.map((record) => (
                    <li onClick={()=> setIsShowArisRunIdModal(true)} key={record?.id}>{record?.text}</li>
                  ))}
                </ul>
              </div>
              <div class="filterthree h-100 w-100 overflow-y-scroll">
              <button className="sticky-top">Green sections</button>
              <ul className="priortySection">
                  {greenpriority?.map((record) => (
                    <li key={record?.id}>{record?.text}</li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default LocationSidebarMbl