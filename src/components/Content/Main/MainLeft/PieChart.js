import React from 'react';
import { Pie } from '@ant-design/plots'

const PieChart = () => {

  const data = [
    {
        type: 'Open Workspace',
        value: 30,
    },
    {
        type: 'Cabins',
        value: 15,
    },
    {
        type: 'Meeting Rooms',
        value: 10,
    },
    {
        type: 'Public Spaces',
        value: 40,
    },
    {
        type: 'Support Spaces',
        value: 5,
    }
  ];
        
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
      fontSize: 14,
      textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
    width: 500
  };
        
    return <Pie {...config} />;
}

export default PieChart;