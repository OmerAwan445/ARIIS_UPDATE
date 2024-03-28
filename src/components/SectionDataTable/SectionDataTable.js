import { fetchSectionsData } from "@/app/services/fetchSectionsData";
import React, { useEffect, useState } from "react";
import { CustomTable } from "../Table/CustomTable";

const SectionDataTable = ({ activeSectionId }) => {
  const [sectionsData, setSectionsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSectionsData();

      setSectionsData(data);
      //   console.log(data);
    };
    fetchData();
  }, []);
  const selectedSection = sectionsData.filter(
    (section) => section.section_id === activeSectionId
  );

  const filteredSection = selectedSection.map((section) => {
    return {
      "Start Chainage": Number(section.start_chainage).toFixed(3),
      "End Chainage": Number(section.end_chainage).toFixed(3),
      "Start Latitude": Number(section.start_latitude).toFixed(5),
      "End Latitude": Number(section.end_latitude).toFixed(5),
      "Start Longitude": Number(section.start_longitude).toFixed(5),
      "End Longitude": Number(section.end_longitude).toFixed(5),
    };
  });

  return (
    <div>
      {filteredSection.map((section, index) => {
        return (
          <div className="tableSection col-12 mt-4 mb-5" key={index}>
            <CustomTable
              isExportData={true}
              columns={Object.keys(section)}
              rows={[Object.values(section)]}
              title={"Section details"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SectionDataTable;
