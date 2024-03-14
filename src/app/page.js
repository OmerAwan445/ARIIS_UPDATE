"use client";
import { AriisRunTableData } from "@/DummyData";
import "@/app/css/index.css";
import ArisRunModal from "@/components/Modal/ArisRunModal";
import { fetchExcelRecords } from "@/utils/fetchxlsdata";
import dynamic from "next/dynamic";
import proj4 from "proj4";
import { useEffect, useState } from "react";
import ModalMap from "../components/Modal/ModalMap";
import { greenpriority, highpriority, midpriority } from "./api";
const MapComponent = dynamic(() => import('@/components/Map/MapComponent'), {
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
    // lat: 30.24362927,
    // lng: 5.31594862,
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
    // Fetch Excel data for all sheets
const fetchExcelData = async () => {
  try {
      // Fetch records from all Excel sheets
      const excelDataArray = await fetchExcelRecords();

      // Extract polyline data from each set of records
      const allPolylineData = excelDataArray.flatMap((excelData, sheetIndex) => {
          // Assuming relevant fields' indices in the Excel data
          const startEastingIndex = 4;
          const startNorthingIndex = 5;
          const endEastingIndex = 9;
          const endNorthingIndex = 10;

          // Extract data from Excel rows and calculate latitude and longitude for start and end points
          return excelData.slice(1).map((row, rowIndex) => {
              const startLatLng = proj4(utmProjection, wgs84Projection, [row[startEastingIndex], row[startNorthingIndex]]);
              const endLatLng = proj4(utmProjection, wgs84Projection, [row[endEastingIndex], row[endNorthingIndex]]);

              return {
                  from_lat: startLatLng[1],
                  from_long: startLatLng[0],
                  to_lat: endLatLng[1],
                  to_long: endLatLng[0],
                  id: `Sheet${sheetIndex + 1}_Row${rowIndex + 1}`,
                  color: "red"
              };
          });
      });

      // Update state with all polyline data
      setState((prevState) => ({
          ...prevState,
          polylineData: allPolylineData,
      }));
  } catch (error) {
      console.error("Error fetching or parsing Excel data:", error);
  }
};


    fetchExcelData();
    fetchMainRailGaugeData();

  }, []);
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <ModalMap
            handleOpenArisRunModal={() => setIsShowArisRunModal(true)}
            show={show}
            handleClose={handleClose}
            title="Section ID #G00002"
          />
          <ArisRunModal
            show={isShowArisRunModal}
            tableData={AriisRunTableData}
            handleClose={() => setIsShowArisRunModal(false)}
          />


          <div className="d-none d-lg-block  col-lg-3 col-xxl-1 p-0">
            <div class="d-flex align-items-center justify-content-between" style={{ height: "calc(100vh - 60px)" }}>
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
                      <li onClick={() => setIsShowArisRunIdModal(true)} key={record?.id}>{record?.text}</li>
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