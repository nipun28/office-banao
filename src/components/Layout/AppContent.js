import React from 'react';
import Main from '../Content/Main/Main'
import ProjectSelection from '../Content/ProjectSelection/ProjectSelection'
import { Button } from 'antd';

const AppContent = () => {
    
  return (
    <div 
    style={{
      width: "93vw",
      margin: "auto",
      display: "flex",
      flexDirection: "column", 
      justifyContent: "space-around"
      }}>
      <div style={{margin: "10px 0px"}}><ProjectSelection /></div>
      <div
      style={{
        margin: "10px 0px",
        border: "1px solid #C2CFE0",
        borderRadius: "5px"
        }}><Main />
      </div>
      <Button type="primary" 
      style={{
        width: "150px", 
        alignSelf: "flex-end",
        margin: "10px 0px",
        background: "#121942",
        border: "0px",
        borderRadius: "5px"
        }}>Proceed
        </Button>
    </div>
  );
}

export default AppContent;