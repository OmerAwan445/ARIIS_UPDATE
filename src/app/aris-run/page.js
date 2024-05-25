import Path from "@/components/PathPage/Path"
import { fetchArisRunTableData } from "../services/fetchArisRunTableData"
import { FormatArisDate } from "@/utils/FormatArisDate";
import { fetchAnalysisAgainstThresholds } from "../services/fetchAnalysisAgainstThresholds";


const fetchArisRunData = async () => {
    const arisRunTableData = {
        columnArisDetail: ["Date", "Run"],
        rowArisDetail: [],
      };
    const record = await fetchArisRunTableData();

    if (record.length > 0) {
      const rows = record.map((item) => {
        const formattedDate = FormatArisDate(item.run_id);
        return { formattedDate, runId: item.run_id }; // Return an object instead of an array
      });
      
      rows.sort((a, b) => {
        const dateA = new Date(a.formattedDate);
        const dateB = new Date(b.formattedDate);
        return dateB - dateA;
      });
      
      const sortedRows = rows.map((row) => [row.formattedDate, row.runId]);
      return { ...arisRunTableData, rowArisDetail: sortedRows };
    //   setArisRunTableData();
    //   handleArisDataForHome({ ...arisRunTableData, rowArisDetail: sortedRows });
    }
  };
  

const fetchGpsData = async (apiRoute) =>{
    const gpsData = await fetchAnalysisAgainstThresholds(apiRoute);
    return gpsData;
}  



  const ArisRunPage = async () => {
       const tableData = await fetchArisRunData();
       const gpsData = await fetchGpsData('gps');

    return (
        <>
        <Path tableData={tableData} gpsData = {gpsData} />
        </>

    )
}

export default ArisRunPage
