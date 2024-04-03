import { fetchAnalysisAgainstThresholds } from "@/app/services/fetchAnalysisAgainstThresholds";
import AnalysisTable from "@/components/InspectionModal/AnalysisTable";
import ProfileImages from "@/components/InspectionModal/ProfileImages";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import InpectionCardLayout from "../../InspectionModal/InpectionCardLayout";
import ParametersAndCondtions from "../../InspectionModal/ParametersAndCondtions";
import ModalHeader from "../ModalHeader";
import OffcanvasWrapper from "../OffcanvasWrapper";
import { BackBtn } from "./BackBtn";
import ScatterPlot from "@/components/ScatterPlotChart/ScatterPlot";

const InspectionModal = ({
  title,
  runNum,
  // sectionNum,
  kmRangeStrt,
  kmRangeEnd,
  dateTime,
  MeasurementImage,
  isShow,
  handleClose,
  isLaserProfile,
  profilesImages,
  analysisTableData,
  apiRoute,
  activeSectionID,
}) => {
  const [analysisAgainstThresholds, setAnalysisAgainstThresholds] = useState(
    []
  );
  const [profileLeft,setProfileLeft] = useState();
  const [profileRight,setProfileRight] = useState();

    // const profileLeft  = [];
  useEffect(() => {
    const fetchData = async () => {
      if (isShow && apiRoute) {
        try {
          const data = await fetchAnalysisAgainstThresholds(apiRoute);
          // console.log(data);

          const filter = data.filter((item) => {
            const sectionId = item.section_id.replace(/^SECTION__/, "");
            // console.log(sectionId===activeSectionID,sectionId,activeSectionID);
            return sectionId === activeSectionID;
          });
          // console.log(filter);

          const filteredData =
            filter?.map((item,index) => {
              let filteredItem = {};
              if (item.gauge) {
                // Extract fields for collection1
                filteredItem = {
                  index:index+1,
                  chainage: item.chainage,
                  gauge: item.gauge,
                };
              } else if (item.horizontal && item.vertical) {
                // Extract fields for collection2
                filteredItem = {
                  chainage: item.chainage,
                  horizontal: item.horizontal,
                  vertical: item.vertical,
                };
              } else if (item.height_left && item.height_right && item.width_left && item.width_right && item.d45_left && item.d45_right ) {
                
                
                filteredItem = {
                  
                  chainage: item.chainage,
                  height_left: item.height_left ,
                  height_right : item.height_right,
                  width_left: item.width_left ,
                  width_right : item.width_right,
                  d45_left: item.d45_left,
                  d45_right: item.d45_right,
                };
                
                // profileLeft=item?.profile_left?.map(([x, y]) => ({ x, y }));
                // profileRight= [...item.profile_right.map(([x, y]) => ({ x, y }))];
                // console.log(profileLeft);
                setProfileLeft(item?.profile_left?.map(([x, y]) => ({ x, y })));
                setProfileRight(item?.profile_right?.map(([x, y]) => ({ x, y })));
              }
              
              return filteredItem;
            }) ?? [];
              
          if (filteredData.length > 0) {
            setAnalysisAgainstThresholds(filteredData);
          } else {
            setAnalysisAgainstThresholds([]);

          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [isShow, apiRoute, activeSectionID]);
  return (
    <OffcanvasWrapper
      offCanvasStyle={{ minWidth: "90vw", zIndex: "99999" }}
      isShow={isShow}
      handleClose={handleClose}
      CloseButtonComponent={BackBtn}
    >
      <Container className="px-3 py-0 primary-bg" fluid>
        <ModalHeader
          runNum={runNum}
          sectionNum={activeSectionID}
          title={title}
          kmRangeStrt={Number(kmRangeStrt).toFixed(3)}
          kmRangeEnd={Number(kmRangeEnd).toFixed(3)}
          dateTime={dateTime}
        />
        <Container fluid>
          <Row className="mt-4 gap-3">
            <InpectionCardLayout colSpace={7} >
              {/* <ProfileImages
                isLaserProfile={isLaserProfile}
                profiles={profilesImages}
                /> */}
                <ScatterPlot profileLeft = {profileLeft} profileRight={profileRight}/>

            </InpectionCardLayout>
            <InpectionCardLayout width={'38.77%'}>
              <AnalysisTable
                tableData={
                  analysisAgainstThresholds.length > 0
                    ? analysisAgainstThresholds
                    : analysisTableData
                }
              />
            </InpectionCardLayout>
          </Row>
          <Row className="mt-4 gap-3">
            <InpectionCardLayout colSpace={7}>
              <Image
                src={MeasurementImage}
                width={0}
                height={0}
                className="w-100"
                alt="Measurement"
              />
            </InpectionCardLayout>
            <InpectionCardLayout>
              <ParametersAndCondtions sectionId={activeSectionID} />
            </InpectionCardLayout>
          </Row>
        </Container>
      </Container>
    </OffcanvasWrapper>
  );
};
export default InspectionModal;
