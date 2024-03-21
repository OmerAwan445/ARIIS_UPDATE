import { fetchSectionsData } from "@/app/services/fetchSectionsData";
import React, { useEffect, useState } from "react";
import { CustomTable } from "../Table/CustomTable";

const SectionDataTable = ({ activeSectionId }) => {
  const [sectionsData, setSectionsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSectionsData();

      setSectionsData(data);
      console.log(data);
    };
    fetchData();
  }, []);
  const selectedSection = sectionsData.filter(
    (section) => section.section_id === activeSectionId
  );

  const filteredSection = selectedSection.map((section) => {
    return {
      "Start Chainage": section.start_chainage,
      "End Chainage": section.end_chainage,
      "Start Latitude": section.start_latitude,
      "End Latitude": section.end_latitude,
      "Start Longitude": section.start_longitude,
      "End Longitude": section.end_longitude,
    };
  });

  return (
    <div>
      {filteredSection.map((section) => {
        return (
          <div className="tableSection col-12 mt-4 mb-5">
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
