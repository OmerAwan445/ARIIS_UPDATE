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

  useEffect(() => {
    // Fetch Excel data when the component mounts

    /*
        const fetchExcelData = async () => {
          try {
             const excelData = await fetchExcelRecord();
            console.log("excelData", excelData);

            // Assuming POINT is in the first column, EASTING is in the sixth column, and NORTHING is in the seventh column
            const pointIndex = 0;
            const eastingIndex = 6;
            const northingIndex = 5;

            // Extract data from Excel rows
            var demoData = excelData.slice(1).map((row) => ({
              POINT: row[pointIndex] || 0,
              EASTING: row[eastingIndex],
              NORTHING: row[northingIndex],
            }));

            console.log("Demo Data Unfiltered", demoData);

            demoData = demoData.filter(
              (item) =>
                item.EASTING !== undefined &&
                item.NORTHING !== undefined &&
                typeof item.EASTING === "number" &&
                typeof item.NORTHING === "number"
            );

            console.log("Demo Data Filtered", demoData);

            // // Example data for demo
            // const demoData = [
            //   { POINT: 'A', EASTING: 495826.79117, NORTHING: 2794807.8545 },
            //   { POINT: 'B', EASTING: 495904.83451, NORTHING: 2794811.76926 },
            //   { POINT: 'C', EASTING: 495945.98545, NORTHING: 2794815.61071 },
            //   // Add more data as needed
            // ];
            // console.log(demoData);

            // Separate Easting, Northing, and POINT values
            const eastingValues = demoData.map((entry) => entry.EASTING);
            const northingValues = demoData.map((entry) => entry.NORTHING);
            const pointValues = demoData.map((entry) => entry.POINT);
            // Ensure that the number of Easting, Northing, and POINT values match
            if (
              eastingValues.length !== northingValues.length ||
              eastingValues.length !== pointValues.length
            ) {
              console.error(
                "Mismatch in the number of Easting, Northing, and POINT values"
              );
              return;
            }

            // Create LatLng objects only for valid coordinates
            var validLatLngObjects = eastingValues.map((eastingValue, index) =>
              proj4(utmProjection, wgs84Projection, [
                eastingValue,
                northingValues[index],
              ])
            );

            // Log latitude and longitude to the console
            validLatLngObjects.forEach((record) => {
              // console.log(`Latitude: ${record[1]}, Longitude: ${record[0]}`);
            });

            console.log("Valid Long Lat Objects", validLatLngObjects);
            validLatLngObjects = [
              [25.24362927, 55.31594862,],
              [25.2418743, 55.31635697,],
              [25.2418743, 55.31635697,],
              [25.24184218, 55.31636444,],
              [25.24181007, 55.3163719,],
              [25.24177795, 55.31637935,],
              [25.24174582, 55.31638678,],
              [25.2417137, 55.31639418,],
              [25.24168156, 55.31640155,],
              [25.24164942, 55.31640887,],
            ];

            // Create data in the desired format
            const polylineData = validLatLngObjects.map((record, index) => ({
              from_lat: state.lat,
              from_long: state.lng,
              id: `ID_${index}`,
              to_lat: record[0],
              to_long: record[1],
              color: "red", // Add color property
            }));

            console.log("polylineData", polylineData)

            setState((prevState) => ({
              ...prevState,
              excelData: {
                easting: eastingValues,
                northing: northingValues,
                points: pointValues,
              },
              polylineData: polylineData,
              validLatLngObjects,
            }));
          } catch (error) {
            console.error("Error fetching or parsing Excel data:", error);
          }
        };
        */

    // fetchExcelData();

    const polylineData = mapCoordinatesSections.map((record, index) => ({
      section_id: record.section_id,
      from_lat: state.lat,
      from_long: state.lng,
      id: record.id,
      to_lat: record.latitude,
      to_long: record.longitude,
      color: "red",
    }));

    const demoData = [
      { POINT: "A", EASTING: 495826.79117, NORTHING: 2794807.8545 },
      { POINT: "B", EASTING: 495904.83451, NORTHING: 2794811.76926 },
      { POINT: "C", EASTING: 495945.98545, NORTHING: 2794815.61071 },
      // Add more data as needed
    ];

    // Separate Easting, Northing, and POINT values
    const eastingValues = demoData.map((entry) => entry.EASTING);
    const northingValues = demoData.map((entry) => entry.NORTHING);
    const pointValues = demoData.map((entry) => entry.POINT);
    setState((prevState) => ({
      ...prevState,
      excelData: {
        easting: eastingValues,
        northing: northingValues,
        points: pointValues,
      },
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
          />

          <ArisRunModal
            show={isShowArisRunModal}
            tableData={AriisRunTableData}
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
