"use client";
import { AriisRunTableData } from "@/DummyData";
import "@/app/css/index.css";
import ArisRunModal from "@/components/Modal/ArisRunModal";
import ModalMap from "@/components/Modal/ModalMap";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import PrioritySectionSidebar from "../PrioritySections/PrioritySectionSidebar";
import PrioritySectionSidebarCanvas from "../PrioritySections/PrioritySectionSidebarCanvas";

const MapComponent = dynamic(() => import("@/components/Map/MapComponent"), {
  ssr: false,
});

export default function Home({ mapCoordinatesSections,sectionData,sectionPriorityData }) {
  const [show, setShow] = useState(false);
  // const [isShowArisRunIdModal, setIsShowArisRunIdModal] = useState(false);
  const [isShowArisRunModal, setIsShowArisRunModal] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [arisRunModalData,setArisModalData] =useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, setState] = useState({
    lat: 25.24362927,
    lng: 55.31594862,
    zoom: 9,
    excelData: {
      easting: [],
      northing: [],
      points: [],
    },
    polylineData: [],
    validLatLngObjects: [],
  });


  const highpriorityItems = new Set();

  /* const utmProjection = "+proj=utm +zone=40 +datum=WGS84 +units=m +no_defs";
  const wgs84Projection = "+proj=longlat +datum=WGS84 +no_defs"; */

  sectionData.forEach((item) => {
    const sectionId = item.section_id.replace(/^SECTION__/, "");
    item.section_id = sectionId;
    const existingItem = Array.from(highpriorityItems).find(
      (obj) => obj.section_id === item.section_id
    );
    if (!existingItem) {
      highpriorityItems.add(item);
    }
  });

  function handleClickOnMapSectionLines(line_section_id) {
    const foundSectionIndex = Array.from(highpriorityItems).findIndex(
      (item) => item.section_id === line_section_id
    );
    if (foundSectionIndex !== -1) {
      setActiveSection([...highpriorityItems][foundSectionIndex]);
      handleShow();
    }
  }

  const handleItemClick = (e) => {
    const sectionOrder = Number(e.target.dataset.sectionOrder ?? -1);
    if (sectionOrder !== null) {
      setActiveSection([...highpriorityItems][sectionOrder]);
      handleShow();
    }
  };


  const handleArisDataFromModal = (data) => {
    setArisModalData(data);
 }
  useEffect(() => {

    const polylineData = mapCoordinatesSections.map((record, index) => {
      // Check if the current record is not the last one
      const isNotLast = index < mapCoordinatesSections.length - 1;
      const nextRecord = isNotLast ? mapCoordinatesSections[index + 1] : null;

      return {
          section_id: record.section_id,
          from_lat: record.latitude,
          from_long: record.longitude,
          id: record.id,
          to_lat: isNotLast ? nextRecord.latitude : record.latitude, // Fallback to current if last record
          to_long: isNotLast ? nextRecord.longitude : record.longitude, // Fallback to current if last record
          color: "red",
      };
  });

    

    // Separate Easting, Northing, and POINT values
    // const eastingValues = demoData.map((entry) => entry.EASTING);
    // const northingValues = demoData.map((entry) => entry.NORTHING);
    // const pointValues = demoData.map((entry) => entry.POINT);
    setState((prevState) => ({
      ...prevState,
      // excelData: {
      //   easting: eastingValues,
      //   northing: northingValues,
      //   points: pointValues,
      // },
      polylineData: polylineData,
    }));
  }, []);

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <ModalMap
            handleOpenArisRunModal={() => setIsShowArisRunModal(true)}
            show={show}
            handleClose={handleClose}
            activeSection={activeSection}
            handleArisDataForHome= {handleArisDataFromModal}
          />

          <ArisRunModal
            show={isShowArisRunModal}
            tableData={arisRunModalData}
            handleClose={() => setIsShowArisRunModal(false)}
          />

          <PrioritySectionSidebar
            highpriorityItems={highpriorityItems}
            handleItemClick={handleItemClick}
          />
          <div className="p-0" style={{ flex: "1", maxWidth: "100%" }}>
            <PrioritySectionSidebarCanvas
              highpriorityItems={highpriorityItems}
              handleItemClick={handleItemClick}
            />
            <MapComponent
              handleClickOnMapSectionLines={handleClickOnMapSectionLines}
              state={state}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
