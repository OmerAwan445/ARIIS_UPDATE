import { Scatter } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { Chart, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js/auto';

const ScatterPlot = ({ profileLeft,profileRight }) => {
  const [data, setData] = useState({
    datasets: [{
      label: 'Profile Left',
      data: profileLeft,
      backgroundColor: 'red',
      borderColor: '#ffffff',
      // borderWidth: 0.5
    },{
      label: 'Profile Right',
    data: profileRight,
    backgroundColor: 'blue',
    borderColor: '#ffffff',
    // borderWidth: 0.5
  }]
  });

  useEffect(() => {
    Chart.register(LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  }, []); // Register components only once when component mounts

  useEffect(() => {
    setData({
      datasets: [{
        label: 'Profile Left',
        data: profileLeft,
        backgroundColor: 'red',
        borderColor: '#ffffff',
        // borderWidth: 1
      },
      {
        label: 'Profile Right',
      data: profileRight,
      backgroundColor: 'blue',
      borderColor: '#ffffff',
      // borderWidth: 0.5
    }]
    });
  }, [profileLeft]); // Update data whenever profileLeft changes

  return (
    <Scatter
    height={400} data={data}
    options={{
      responsive:true,
      maintainAspectRatio: false 
    }} />
  );
};

export default ScatterPlot;
