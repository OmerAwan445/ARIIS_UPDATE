import { Scatter } from "react-chartjs-2";
import { useState, useEffect } from "react";
import {
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

const ScatterPlot = ({ profileLeft, profileRight }) => {
  const [data, setData] = useState({
    datasets: [],
  });

  useEffect(() => {
    Chart.register(
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, []); // Register components only once

  useEffect(() => {    
    const datasets = [];
    if (profileLeft !== "NONE") {
      datasets.push({
        label: "Profile Left",
        data: profileLeft,
        backgroundColor: "red",
        borderColor: "red",
      });
    }
    if (profileRight !== "NONE") {
      datasets.push({
        label: "Profile Right",
        data: profileRight,
        backgroundColor: "blue",
        borderColor: "blue",
      });
    }
    setData({ datasets });
  }, [profileLeft, profileRight]); // Update data when profileLeft or profileRight changes

  return (
    <Scatter
      height={400}
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        animation:false,
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            min: -100,
            max: 100   ,
            grid:{
              color:"grey"
            }        
          },
          y: {
            type: 'linear',
            min: 0,
            max: 200,
            grid:{
              color:"grey"
            }
          }          
        },
      }}
    />
  );
};

export default ScatterPlot;
