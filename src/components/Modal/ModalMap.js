// components/ModalMap.js
"use client";
import { ColArisDetail, columnDetail, inspection, rowArisDetail, rowDetail } from "@/app/api";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Table } from "../Table/Table";
import TabContent from "../Tabs/TabContent";
import "./style.css";
import InspectionModal from "./InspectionModal";
import { RailProfile } from '@/DummyData'
import MeasurementImage from '/public/DummyData/Images/Measuremnet.png'
import { AnalysisAgainstThresholds } from '@/DummyData';


function ModalMap({ show, handleClose, title }) {

const [isShowOffcanvas, setIsShowOffcanvas] = useState({
  railWear: false,
  trackGuage: false,
  flangeway: false,
  freeWheel: false
});

function toggleOffcanvas (offcanvasName, state) {
    setIsShowOffcanvas({ ...isShowOffcanvas, [offcanvasName]: state });
}


  // console.log(columnDetail)
  return (
    <>
        {/* Third Rail Position */}
    <InspectionModal
    title={"Third Rail Position"} runNum={RailProfile.runNum} sectionNum={RailProfile.sectionNum}
    kmRangeStrt={RailProfile.kmRangeStrt} kmRangeEnd={RailProfile.kmRangeEnd} dateTime={RailProfile.dateTime}
    laserProfiles={[
      {
          imageUrl: '/DummyData/Images/Left Rail Profile.png',
          title: "Left Rail Profile"
      },
      {
          imageUrl: '/DummyData/Images/Right Rail Profile.png',
          title: "Right Rail Profile"
      }
  ]}
    MeasurementImage={MeasurementImage} isShow={isShowOffcanvas.railWear} handleClose={()=> toggleOffcanvas( 'railWear', false )}
    analysisTableData={AnalysisAgainstThresholds}
    />
        {/* Track Gauge Modal */}
    <InspectionModal title={"Track Guage"} runNum={RailProfile.runNum} sectionNum={RailProfile.sectionNum}
    kmRangeStrt={RailProfile.kmRangeStrt} kmRangeEnd={RailProfile.kmRangeEnd} dateTime={RailProfile.dateTime}
    laserProfiles={[
      {
          imageUrl: '/DummyData/Images/laserProfile-img.png',
          title: "Left Rail Profile & Right Rail Profile"
      }
  ]}
    MeasurementImage={MeasurementImage} isShow={isShowOffcanvas.trackGuage} handleClose={()=> toggleOffcanvas( 'trackGuage', false )}
    analysisTableData={AnalysisAgainstThresholds}
    />
    {/* Flangeway Modal */}
    <InspectionModal title={"Flangeway"} runNum={RailProfile.runNum} sectionNum={RailProfile.sectionNum}
    kmRangeStrt={RailProfile.kmRangeStrt} kmRangeEnd={RailProfile.kmRangeEnd} dateTime={RailProfile.dateTime}
    laserProfiles={[
      {
          imageUrl: '/DummyData/Images/laserProfile-img2.png',
          title: "Left Rail Profile"
      },
      {
          imageUrl: '/DummyData/Images/laserProfile-img2.png',
          title: "Right Rail Profile"
      }
  ]}
    MeasurementImage={MeasurementImage} isShow={isShowOffcanvas.flangeway} handleClose={()=> toggleOffcanvas( 'flangeway', false )}
    analysisTableData={AnalysisAgainstThresholds}
    />
    {/* Free Wheel Clearance Modal */}
    <InspectionModal title={"Free Wheel Clearance"} runNum={RailProfile.runNum} sectionNum={RailProfile.sectionNum}
    kmRangeStrt={RailProfile.kmRangeStrt} kmRangeEnd={RailProfile.kmRangeEnd} dateTime={RailProfile.dateTime}
    laserProfiles={[
      {
          imageUrl: '/DummyData/Images/laserProfile-img3.png',
          title: "Left Rail Profile"
      },
      {
          imageUrl: '/DummyData/Images/laserProfile-img3.png',
          title: "Right Rail Profile"
      }
  ]}
    MeasurementImage={MeasurementImage} isShow={isShowOffcanvas.freeWheel} handleClose={()=> toggleOffcanvas( 'freeWheel', false )}
    analysisTableData={AnalysisAgainstThresholds}
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
                    inspection?.map ( record => (
                      <span style={{cursor:"pointer"}} onClick={() =>toggleOffcanvas(record.offCanvasName, true) } key={record?.id}>{record?.title}</span>
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
