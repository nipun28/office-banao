import React from 'react';
import { Steps } from 'antd';
import MainLeft from './MainLeft/MainLeft'
import MainRight from './MainRight/MainRight'
import { Typography, Divider } from 'antd';

const Main = () => {

  const { Step } = Steps;
  const { Text } = Typography;

  return (
    <div>
      <div 
      style={{
        height: "50px", 
        backgroundColor: "#DEEAFA", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center",
        marginBottom: "10px"
        }}>
        <Steps style={{width: "78vw"}} size="small" current={3}>
          <Step 
          title={<Text 
          strong
          style={{
            color: "#121942",
            fontSize: "13px"
          }}>Basic Info</Text>} />
          <Step 
          title={<Text 
          strong
          style={{
            color: "#121942",
            fontSize: "13px"
          }}>Design Style Quiz</Text>} />
          <Step 
          title={<Text 
          strong
          style={{
            color: "#121942",
            fontSize: "13px"
          }}>Quiz Output</Text>} />
          <Step 
          title={<Text 
          strong
          style={{
            color: "#121942",
            fontSize: "13px"
          }}>Space Configuration</Text>} />
          <Step 
          title={<Text 
          strong
          style={{
            color: "#121942",
            fontSize: "13px"
          }}>Cost Packages</Text>} />
          <Step 
          title={<Text 
          strong
          style={{
            color: "#121942",
            fontSize: "13px"
          }}>Information Upload</Text>} />
        </Steps>
      </div>
      <div 
      style={{
        display: "flex",
        marginTop: "30px",
        padding: "0px 15px"
        }}>
        <MainLeft />
        <Divider 
        type="vertical" 
        style={{
          height: "650px", 
          backgroundColor: "#C2CFE0",
          alignSelf: "center"
          }} /><MainRight />
      </div>
    </div>
  );
}

export default Main;