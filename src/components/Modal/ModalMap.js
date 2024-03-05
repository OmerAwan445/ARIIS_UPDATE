// components/ModalMap.js
"use client";
import { ColArisDetail, columnDetail, inspection, rowArisDetail, rowDetail } from "@/app/api";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { CustomTable } from '../Table/CustomTable';
import TabContent from "../Tabs/TabContent";
import InspectionModal from "./InspectionModal/InspectionModal";
import VideoImageModal from "./VideoImageModal/VideoImageModal";
import "./style.css";
import Link from "next/link";


function ModalMap({ show, handleClose, title, handleOpenArisRunModal }) {

  const [isShowOffcanvas, setIsShowOffcanvas] = useState({
    trackGuage: false,
    flangeway: false,
    freeWheel: false,
    crosslevel: false,
    railProfileWear: false,
    thirdRailPos: false,
    thirdRailWear: false,
    twistLongShort: false,
    superElevation: false,
    panromicVideoTrack: false,
    railImage: false,
    panoramicVideo: false,
    railImage: false,
    arisRun:false
  });

  function toggleOffcanvas(offcanvasName, state) {
    setIsShowOffcanvas({ ...isShowOffcanvas, [offcanvasName]: state });
  }


  console.log(inspection, "inspection")
  return (
    <>
      {inspection.map((record) =>
        record.isVideoImageModal ? (
          <VideoImageModal
            key={record.id}
            {...record}
            isShow={isShowOffcanvas[record.offCanvasName]}
            handleClose={() => toggleOffcanvas(record.offCanvasName, false)}
          />
          ) : (
          <InspectionModal
            key={record.id}
            {...record}
            isShow={isShowOffcanvas[record.offCanvasName]}
            handleClose={() => toggleOffcanvas(record.offCanvasName, false)}
          />
        )
      )}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        className='customModalMap'>
        <Modal.Body>
          <div className='row'>
            <p onClick={handleClose} className="col-12 d-flex justify-content-start mb-3"><span className="close">X</span></p>
            <div className='header d-flex align-items-baseline col-12'>
              <h3 className="mb-3">{title}</h3>
              <span className="tag">
                Non Complaint
              </span>
            </div>
            <div className='tableSection col-12 mt-4 mb-5'>
              <CustomTable columns={columnDetail} rows={rowDetail} title={'Section details'} />
            </div>
            <div className='tableSection col-8'>
              <CustomTable columns={ColArisDetail} rows={rowArisDetail} title={'ARIIS runs'} />
              <div>
                <h4 className="mt-5 fs-4">TCI</h4>
                <TabContent />
              </div>
            </div>
            <div className="col-4">
              <h4 className="mt-4 mb-4">Inspections</h4>
              <div className="secondary-bg">
                <div className="d-flex flex-column px-2 ">
                  {inspection?.map((record, index) => (
                    <>
                      <button
                        key={record?.id}
                        onClick={() => toggleOffcanvas(record.offCanvasName, true)}
                        className='inspection-list-color rounded py-3 border-0 text-start'
                        style={record.title === 'Rail Profile Wear' ? { backgroundColor: "#a2191f" } : { backgroundColor: "transparent" }}
                      >
                        <span className='d-block'>{record?.title}</span>
                        </button>
                        {(index + 1) % 4 === 0 && <hr className='my-3' style={{backgroundColor:"#C6C6C6"}} />}
                    </>
                  ))}
                  <Link href="/aris-run"
                        className='inspection-list-color ms-2 text-decoration-none bg-transparent rounded py-3 border-0 text-start'>
                        <span className='d-block'>Aris Run View</span>
                        </Link>
                  <button
                        onClick={handleOpenArisRunModal}
                        className='inspection-list-color bg-transparent rounded py-3 border-0 text-start'>
                        <span className='d-block'>Aris Run GPS Point</span>
                        </button>
                </div>
              </div>

            </div>
          </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalMap;
