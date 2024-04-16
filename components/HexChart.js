'use client';

import React from 'react';
import ApexChart from 'react-apexcharts';

const HexChart = ({ stats }) => {
  const categories = stats.map(stat => stat.stat.name.toUpperCase());
  const values = stats.map(stat => stat.base_stat);

  const chartOptions = {
    chart: {
      type: 'radar',
      height: 350,
      background: 'transparent',
    },
    series: [
      {
        name: 'Stats',
        data: values,
        fill: {
          colors: ['#FF5722'],
        },
      },
    ],
    xaxis: {
      categories: categories,
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 255,
      tickAmount: 5,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      borderColor: '#555',
      strokeDashArray: 4,
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
    },
    colors: ['#FF5722'],
  };

  return (
    <div className='flex justify-center'>
      <div className="bg-gray-800 p-4 rounded-md shadow-md my-4">
        <ApexChart
          options={chartOptions}
          series={chartOptions.series}
          type="radar"
          height={350}
          width={400}
        />
      </div>
    </div>
  );
};

export default HexChart;