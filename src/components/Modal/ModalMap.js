// components/ModalMap.js
"use client";
import { RailProfile } from '@/DummyData';
import { ColArisDetail, columnDetail, inspection, rowArisDetail, rowDetail } from "@/app/api";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Table } from "../Table/Table";
import TabContent from "../Tabs/TabContent";
import InspectionModal from "./InspectionModal/InspectionModal";
import VideoImageModal from "./VideoImageModal/VideoImageModal";
import "./style.css";
import MeasurementImage from '/public/DummyData/Images/Measuremnet.png';


function ModalMap({ show, handleClose, title }) {

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
    railImage: false
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


      {/* Video Modal */}
      <VideoImageModal isShow={isShowOffcanvas.panoramicVideo} handleClose={() => toggleOffcanvas("panoramicVideo", false)} isVideoModal={true}
        title={"Panoramic Video of Tracks"} runNum={RailProfile.runNum} sectionNum={RailProfile.sectionNum}
        kmRangeStrt={RailProfile.kmRangeStrt} kmRangeEnd={RailProfile.kmRangeEnd} dateTime={RailProfile.dateTime}
        videoUrl="https://www.youtube.com/watch?v=ZK-rNEhJIDs"
        MeasurementImage={MeasurementImage}
      />

      {/* Image Modal */}
      <VideoImageModal   isVideoModal={false}
        title={"Panoramic Video of Tracks"} runNum={RailProfile.runNum} sectionNum={RailProfile.sectionNum}
        kmRangeStrt={RailProfile.kmRangeStrt} kmRangeEnd={RailProfile.kmRangeEnd} dateTime={RailProfile.dateTime}
        imageUrls= {['/DummyData/Images/rail-img1.png','/DummyData/Images/rail-img2.png']}
        MeasurementImage={MeasurementImage}
        isShow={isShowOffcanvas.railImage} handleClose={() => toggleOffcanvas("railImage", false)}
      />

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
            <div className='tableSection col-12'>
              <Table title="Section" column={columnDetail} row={rowDetail} name={'Section details'} />
            </div>
            <div className='tableSection col-8'>
              <Table title="Section" column={ColArisDetail} row={rowArisDetail} name={'ARIIS runs'} />
              <div>
                <h4 className="mt-5">TCI</h4>
                <TabContent />
              </div>
            </div>
            <div className="col-4">
              <h4 className="mt-4 mb-4">Inspections</h4>
              <div className="inspectionBox">
                <div className="d-flex flex-column gap-4">
                  {
                    inspection?.map(record => (
                      <span style={{ cursor: "pointer" }} onClick={() => toggleOffcanvas(record.offCanvasName, true)} key={record?.id}>{record?.title}</span>
                    ))
                  }
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
