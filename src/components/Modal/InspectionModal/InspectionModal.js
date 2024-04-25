import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import OffcanvasWrapper from "../OffcanvasWrapper";
import ModalHeader from "../ModalHeader";
import InpectionCardLayout from "../../InspectionModal/InpectionCardLayout";
import AnalysisTable from "@/components/InspectionModal/AnalysisTable";
import ScatterPlot from "@/components/ScatterPlotChart/ScatterPlot";
import ParametersAndCondtions from "../../InspectionModal/ParametersAndCondtions";
import { fetchAnalysisAgainstThresholds } from "@/app/services/fetchAnalysisAgainstThresholds";
import { BackBtn } from "./BackBtn";

const InspectionModal = ({
  title,
  runNum,
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
  const [data, setData] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedData, setSelectedData] = useState({});
  const [tableData, setTableData] = useState({});
  const [profileLeft, setProfileLeft] = useState();
  const [profileRight, setProfileRight] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (isShow && apiRoute) {
        try {
          const fetchedData = await fetchAnalysisAgainstThresholds(apiRoute);
          const filteredData = fetchedData
            .filter(
              (item) =>
                item.section_id.replace(/^SECTION__/, "") === activeSectionID
            )
            .sort((a, b) => parseFloat(a.chainage) - parseFloat(b.chainage)); // Ensure chainage is treated as a number for sorting

          setData(filteredData);
          if (filteredData.length > 0) {
            setSliderValue(0); // Initialize slider to the first index
            selectDataByIndex(0); // Initialize with the first data entry
            setSelectedData(filteredData[0]);
            // Extract only the first five columns you are interested in
            const {
              chainage,
              height_left,
              height_right,
              width_left,
              width_right,
            } = filteredData[0];
            const newSelectedData = {
              chainage,
              height_left,
              height_right,
              width_left,
              width_right,
            };
            setTableData(newSelectedData);

            setProfileLeft(
              filteredData[0]?.profile_left
                ?.filter(([x, y]) => x <= 200 && y <= 200)
                .map(([x, y]) => ({ x, y }))
            );
            setProfileRight(
              filteredData[0]?.profile_right
                ?.filter(([x, y]) => x <= 200 && y <= 200)
                .map(([x, y]) => ({ x, y }))
            );
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [isShow, apiRoute, activeSectionID]);

  const selectDataByIndex = (index) => {
    if (data[index]) {
      // Extract only the first five columns you are interested in
      const { chainage, height_left, height_right, width_left, width_right } =
        data[index];
      const newSelectedData = {
        chainage,
        height_left,
        height_right,
        width_left,
        width_right,
      };

      // console.log("Select Data for index:", index, newSelectedData);
      setSelectedData(data[index]); // Set the full data for other uses
      setTableData(newSelectedData); // Set the trimmed data for the table
      setProfileLeft(
        data[index]?.profile_left
          ?.filter(([x, y]) => x <= 200 && y <= 200)
          .map(([x, y]) => ({ x, y }))
      );
      setProfileRight(
        data[index]?.profile_right
          ?.filter(([x, y]) => x <= 200 && y <= 200)
          .map(([x, y]) => ({ x, y }))
      );
    }
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    selectDataByIndex(newValue);
  };

  // Prepare marks for the slider based on data indices and chainage values
  const sliderMarks = data.map((item, index) => ({
    value: index,
    label: `${item.chainage}`,
  }));

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
            <InpectionCardLayout colSpace={4}>
              <ScatterPlot
                profileLeft={profileLeft || []}
                profileRight={"NONE"}
              />
            </InpectionCardLayout>
            <InpectionCardLayout colSpace={4}>
              <ScatterPlot
                profileLeft={"NONE"}
                profileRight={profileRight || []}
              />
            </InpectionCardLayout>
            <InpectionCardLayout width={"30.77%"}>
              <AnalysisTable tableData={tableData ? [tableData] : []} />
            </InpectionCardLayout>
          </Row>
          <Row className="mt-4 gap-3">
            <InpectionCardLayout colSpace={8}>
              <>
                <Image
                  src={MeasurementImage}
                  width={0}
                  height={0}
                  className="w-100"
                  alt="Measurement"
                />
                {data.length > 0 && (
                  <Slider
                    value={sliderValue}
                    sx={{
                      height:15,
                      borderRadius: 0,
                    }}  
                    onChange={handleSliderChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="on"
                    // marks={sliderMarks}
                    min={0}
                    max={data.length - 1}
                  />
                )}
              </>
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
