"use client";
import { useEffect, useState } from "react";
import "@/app/css/index.css";
import { highpriority } from "./api";
import dynamic from "next/dynamic";
import ModalMap from "../components/Modal/ModalMap";
import MapComponent from "@/components/Map/MapComponent";
import proj4 from "proj4";
import { fetchExcelRecord } from "@/utils/fetchxlsdata";

export default function Home() {
  const [show, setShow] = useState(false);
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
          [25.24362927, 55.31594862],
          [25.2418743, 55.31635697],
          [25.2418743, 55.31635697],
          [25.24184218, 55.31636444],
          [25.24181007, 55.3163719],
          [25.24177795, 55.31637935],
          [25.24174582, 55.31638678],
          [25.2417137, 55.31639418],
          [25.24168156, 55.31640155],
          [25.24164942, 55.31640887],
          [25.24161726, 55.31641615],
          [25.2415851, 55.31642337],
          [25.24155293, 55.31643053],
          [25.24152074, 55.31643761],
          [25.24152074, 55.31643761],
          [25.24141776, 55.31645976],
          [25.24131464, 55.31648112],
          [25.24121139, 55.31650169],
          [25.24110801, 55.31652147],
          [25.2410045, 55.31654046],
          [25.24090088, 55.31655866],
          [25.24079715, 55.31657608],
          [25.24069331, 55.31659269],
          [25.24058937, 55.31660852],
          [25.24048533, 55.31662355],
          [25.2403812, 55.31663779],
          [25.2403812, 55.31663779],
          [25.24034861, 55.31664209],
          [25.24031601, 55.31664631],
          [25.2402834, 55.31665047],
          [25.24025079, 55.31665457],
          [25.24021817, 55.31665862],
          [25.24018555, 55.31666263],
          [25.24015292, 55.3166666],
          [25.24012029, 55.31667055],
          [25.24008766, 55.31667447],
          [25.24005503, 55.31667838],
          [25.24002239, 55.31668228],
          [25.24002239, 55.31668228],
          [25.23682025, 55.31706514],
          [25.23682025, 55.31706514],
          [25.23674682, 55.3170739],
          [25.23667339, 55.31708256],
          [25.23659993, 55.31709102],
          [25.23652644, 55.31709919],
          [25.23645292, 55.31710695],
          [25.23637936, 55.31711421],
          [25.23630575, 55.31712086],
          [25.23623209, 55.31712682],
          [25.23615838, 55.31713197],
          [25.23608462, 55.31713622],
          [25.23601082, 55.31713946],
          [25.23601082, 55.31713946],
          [25.23596188, 55.31714101],
          [25.23591293, 55.31714207],
          [25.23586397, 55.31714265],
          [25.23581501, 55.31714274],
          [25.23576605, 55.31714234],
          [25.2357171, 55.31714146],
          [25.23566815, 55.31714009],
          [25.23561922, 55.31713824],
          [25.23557031, 55.31713589],
          [25.23552141, 55.31713307],
          [25.23547255, 55.31712975],
          [25.23547255, 55.31712975],
          [25.23539888, 55.31712385],
          [25.23532529, 55.31711695],
          [25.23525178, 55.31710914],
          [25.23517833, 55.31710053],
          [25.23510496, 55.31709123],
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
            show={show}
            handleClose={handleClose}
            title="Section ID #182 120 68"
          />
          <div className="col-sm-12 col-md-3 col-lg-3 col-xxl-1 scSidebar">
            <div className="row flex-column align-items-between secsidebar">
              <div className="filterone col-12">
                <button>High priority sections</button>
                <ul className="priortySection">
                  {state?.polylineData?.map((record, index) => (
                    <li onClick={() => handleShow()} key={index}>
                      {record?.from_long}, {record?.from_lat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="filtertwo col-12 w-100">
                <button>Mid priority sections</button>
                <ul className="priortySection">
                  {highpriority?.map((record) => (
                    <li key={record?.id}>{record?.text}</li>
                  ))}
                </ul>
              </div>
              <div className="filterthree col-12 w-100">
                <button>Green sections</button>
                <ul className="priortySection">
                  {highpriority?.map((record) => (
                    <li key={record?.id}>{record?.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-9 col-lg-9 col-xxl-11  p-0">
            <MapComponent state={state} />
          </div>
        </div>
      </div>
    </div>
  );
}
