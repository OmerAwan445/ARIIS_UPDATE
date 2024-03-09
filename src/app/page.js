"use client";
import { AriisRunTableData } from "@/DummyData";
import "@/app/css/index.css";
import ArisRunModal from "@/components/Modal/ArisRunModal";
import { fetchExcelRecord } from "@/utils/fetchxlsdata";
import dynamic from "next/dynamic";
import proj4 from "proj4";
import { useEffect, useState } from "react";
import ModalMap from "../components/Modal/ModalMap";
import { greenpriority, highpriority, midpriority } from "./api";

const MapComponent  = dynamic(() => import('@/components/Map/MapComponent'), {
  ssr: false
})

export default function Home() {
  const [show, setShow] = useState(false);
  const [isShowArisRunIdModal, setIsShowArisRunIdModal] = useState(false);
  const [isShowArisRunModal, setIsShowArisRunModal] = useState(false);
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
  // console.log(state.polylineData)
  const utmProjection = "+proj=utm +zone=40 +datum=WGS84 +units=m +no_defs";
  const wgs84Projection = "+proj=longlat +datum=WGS84 +no_defs";

  useEffect(() => {
    // Fetch Excel data when the component mounts
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
        validLatLngObjects.forEach((latLng) => {
          // console.log(`Latitude: ${latLng[1]}, Longitude: ${latLng[0]}`);
        });

        console.log("Valid Long Lat Objects", validLatLngObjects);
        validLatLngObjects = [
          [ 25.24362927,55.31594862,],
          [ 25.2418743, 55.31635697,],
          [ 25.2418743, 55.31635697,],
          [ 25.24184218,55.31636444,],
          [ 25.24181007,55.3163719, ],
          [ 25.24177795,55.31637935,],
          [ 25.24174582,55.31638678,],
          [ 25.2417137, 55.31639418,],
          [ 25.24168156,55.31640155,],
          [ 25.24164942,55.31640887,],
        ];

        console.log("Valid Long Lat Objects New", validLatLngObjects);

        // Create data in the desired format
        const polylineData = validLatLngObjects.map((latLng, index) => ({
          from_lat: state.lat,
          from_long: state.lng,
          id: `ID_${index}`,
          to_lat: latLng[0],
          to_long: latLng[1],
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

    fetchExcelData();
  }, []);
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <ModalMap
            handleOpenArisRunModal={()=> setIsShowArisRunModal(true)}
            show={show}
            handleClose={handleClose}
            title="Section ID #G00002"
          />
          <ArisRunModal
          show={isShowArisRunModal}
          tableData={AriisRunTableData}
          handleClose={()=> setIsShowArisRunModal(false)}
          />


          <div className="d-none d-lg-block  col-lg-3 col-xxl-1 p-0">
          <div class="d-flex align-items-center justify-content-between" style={{height:"calc(100vh - 60px)"}}>
            <div class="d-flex h-100 flex-column w-100">
              <div class="filterone h-100 w-100 overflow-y-scroll">
              <button className="sticky-top">High priority sections</button>
              <ul className="priortySection">
                    {highpriority.map((record, index) => (
                    <li onClick={() => handleShow()} key={index}>
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


          <div className="col-12 col-lg-9 col-xxl-11  p-0">
            <MapComponent state={state} />
          </div>
        </div>
      </div>
    </div>
  );
}