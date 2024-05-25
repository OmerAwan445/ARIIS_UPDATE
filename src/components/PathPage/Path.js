'use client';
import ArisRunModal from '@/components/Modal/ArisRunModal';
import dynamic from "next/dynamic";
import { useState } from 'react';
import { FaArrowCircleDown } from "react-icons/fa";

const PathMapComponent = dynamic(() => import("@/components/Map/PathMapComponent"), {
    ssr: false,
});

// import PathMapComponent from '../Map/PathMapComponent';

const Path = ({ tableData, gpsData }) => {
    const [isShowArisRunIdModal, setIsShowArisRunIdModal] = useState(true);
    const [uniqueSectionIds, setUniqeSectionIds] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [markersArray, setMarkersArray] = useState([]);
    const [state, setState] = useState({
        lat: 25.24362927,
        lng: 55.31594862,
        zoom: 13,
        radius: 3,
        excelData: {
            easting: [],
            northing: [],
            points: [],
        },
        polylineData: [],
        validLatLngObjects: [],
    });


    const handleRunIdClick = (runId) => {
        // Filter GPS data based on run_id
        const filteredData = gpsData.filter((item) => item.run_id === runId);
        // Create a Set to store unique section_ids
        setFilteredData(filteredData);
        const sectionIdSet = new Set();

        filteredData.forEach((item) => {
            sectionIdSet.add(item.section_id.replace(/^SECTION__/, ""));
        });

        // Convert Set to array if needed
        const uniqueSectionIds = Array.from(sectionIdSet);
        setUniqeSectionIds(uniqueSectionIds);
    };

    const handleSectionIdClick = (sectionId) => {

        const sectionFilterData = filteredData.filter((item) => item.section_id.replace(/^SECTION__/, "") === sectionId);
        console.log(sectionFilterData);
        const markersArray = sectionFilterData.map((item) => [item.latitude, item.longitude]);
        setMarkersArray(markersArray);
        setIsShowArisRunIdModal(false);
    }

    return (
        <>
            <button className='toggle-button ' style={{left:'300px'}}

                onClick={() => setIsShowArisRunIdModal(true)}
            >
                <FaArrowCircleDown className="navbar-toggler-icon" />
            </button>
            <div className='main-panel'>
                <PathMapComponent state={state} markersArray={markersArray} />
                <ArisRunModal
                    show={isShowArisRunIdModal}
                    tableData={tableData}
                    handleClose={() => setIsShowArisRunIdModal(false)}
                    AriisRunSectionIds={uniqueSectionIds}
                    onRunIdClick={handleRunIdClick}
                    onSectionIdClick={handleSectionIdClick}
                />
            </div>
        </>
    )
}

export default Path
