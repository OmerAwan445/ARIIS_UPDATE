// components/ModalMap.js
"use client";
import {
  ColArisDetail,
  columnDetail,
  inspection,
  rowArisDetail,
} from "@/app/api";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { CustomTable } from "../Table/CustomTable";
import TabContent from "../Tabs/TabContent";
import InspectionModal from "./InspectionModal/InspectionModal";
import VideoImageModal from "./VideoImageModal/VideoImageModal";
import "./style.css";
import { fetchArisRunTableData } from "@/app/services/fetchArisRunTableData";
import SectionDataTable from "../SectionDataTable/SectionDataTable";

function ModalMap({
  show,
  handleClose,
  handleOpenArisRunModal,
  activeSection,
}) {
  if (!activeSection) return null;
  const [arisRunTableData, setArisRunTableData] = useState({
    columnArisDetail: ["Date", "Run"],
    rowArisDetail: [],
  });

  const title = activeSection?.section_id;
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
    arisRun: false,
  });

  const rowDetail = [["Straight", activeSection["chainage"], "4829.2829", "36583.2839", "257'23", "TBA"]]

  function toggleOffcanvas(offcanvasName, state) {
    setIsShowOffcanvas({ ...isShowOffcanvas, [offcanvasName]: state });
  }

  useEffect(() => {
    const fetchData = async () => {
      const record = await fetchArisRunTableData();
      if (record.length > 0) {
        const rows = record.map((item) => {
          const originalDate = new Date("2024-03-15T03:21:54.459Z");

          const day = originalDate.getUTCDate();
          const month = originalDate.getUTCMonth() + 1;
          const year = originalDate.getUTCFullYear();

          const formattedDate = `${day}/${
            month < 10 ? "0" + month : month
          }/${year}`;
          return [formattedDate, item.run_id];
        });
        setArisRunTableData({ ...arisRunTableData, rowArisDetail: [...rows] });
      }
    };
    fetchData();
  }, []);

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
        fullscreen={"xl-down"}
        keyboard={false}
        className="customModalMap"
      >
        <Modal.Body style={{ marginTop: "0px !important" }}>
          <div className="row">
            <p
              onClick={handleClose}
              className="col-12 d-flex justify-content-start mb-3"
            >
              <span className="close">X</span>
            </p>
            <div className="header d-flex align-items-baseline col-12">
              <h3 className="mb-3">{title}</h3>
              <span className="tag">Non Complaint</span>
            </div>
            <SectionDataTable activeSectionId={activeSection.section_id} />
            {/* <div className='tableSection col-12 mt-4 mb-5'>
              <CustomTable isExportData={true} columns={columnDetail} rows={rowDetail} title={'Section details'} />
            </div> */}
            <div className="tableSection col-md-8 col-12">
              <CustomTable
                // isExportData={true}
                columns={arisRunTableData.columnArisDetail}
                rows={arisRunTableData.rowArisDetail}
                title={"ARIIS runs"}
              />
              <div>
                <h4 className="mt-5 fs-4">TCI</h4>
                <TabContent />
              </div>
            </div>
            <div className="col-md-4 col-12">
              <h4 className="mt-4 mb-4">Inspections</h4>
              <div className="secondary-bg">
                <div className="d-flex flex-column px-2 ">
                  {inspection?.map((record, index) => (
                    <>
                      <button
                        key={record?.id}
                        onClick={() =>
                          toggleOffcanvas(record.offCanvasName, true)
                        }
                        className="inspection-list-color rounded py-3 border-0 text-start"
                        style={
                          record.title === "Rail Profile Wear"
                            ? { backgroundColor: "#a2191f" }
                            : { backgroundColor: "transparent" }
                        }
                      >
                        <span className="d-block">{record?.title}</span>
                      </button>
                      {(index + 1) % 4 === 0 && (
                        <hr
                          className="my-3"
                          style={{ backgroundColor: "#C6C6C6" }}
                        />
                      )}
                    </>
                  ))}

                  <button
                    onClick={handleOpenArisRunModal}
                    className="inspection-list-color bg-transparent rounded py-3 border-0 text-start"
                  >
                    <span className="d-block">Aris Run GPS Point</span>
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
