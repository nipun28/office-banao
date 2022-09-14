import React from 'react';
import { Button, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProjectName from './ProjectName';

const ProjectSelection = () => {

  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleClick = () => {
    console.log("Start New Project")
  }

  return (
    <div
    style={{
      display: "flex", 
      justifyContent: "space-between"
      }}>
      <div 
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)"
        }}>
        <Select 
        style={{
          width: "350px", 
          textAlign: "left"
          }}
        defaultValue="new delhi" 
        onChange={handleChange}>
          <Option value="new delhi">
            <ProjectName 
            name="Project Name"
            id="2234667" 
            state="New Delhi" 
            city="Dwarka" />
          </Option>
          <Option value="bangalore">
            <ProjectName 
            name="Project Name 2"
            id="2234668" 
            state="Uttarakhand" 
            city="Roorkee" />
          </Option>
        </Select>
      </div>
      <Button 
      type="primary" 
      icon={<PlusOutlined />} 
      onClick={handleClick}
      style={{
        background: "#60D1D0",
        border: "0px",
        borderRadius: "5px"
      }}
      >Start New Project
      </Button>
    </div>
  );
}

export default ProjectSelection;