import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function MyChart(props) {
  const data = {
    labels: [1,2,3,4,5,6,7],
    datasets: [
      {
        data: [],
        fill: false,
        borderColor: "#9374a4",
      },
    ],
  };
  const options = {
    legend: {
    	display: false
    },
    animations: {
      tension: {
        duration: 500,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    plugins: {
      legend: {
          display: false,
      }
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        }
      },
      y: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
        title: {
          display: false
        }
      }
    }
  }
  const { chartData } = props;
  let points = JSON.parse(chartData); 
  data.datasets[0].data = points;
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}
