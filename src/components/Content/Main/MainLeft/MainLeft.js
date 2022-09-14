import React from 'react';
import { Typography, Button, Divider } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import PieChart from './PieChart'

const MainLeft = () => {

    const {Text } = Typography;

    const handleClick = () => {
      console.log("Edit Total Area")
    }

    return (
        <div>
          <div
          style={{
            border: "1px solid #C2CFE0", 
            borderRadius: "5px",
            padding: "15px"
            }}>

            <div 
            style={{
              textAlign: "left", 
              display: "flex", 
              flexDirection: "column"
              }}>
              <Text strong style={{fontSize: "16px"}}>Configuring Your Office</Text>
              <Text style={{fontSize: "12px"}}>Based on your design preference and your office area below is a configuration for your space.</Text>
            </div>

            <div style={{display: "flex"}}>
              <div
              style={{
                width: "50%", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-around",
                margin: "10px 0px"
                }}>
                <Text 
                strong 
                style={{
                  fontSize: "14px", 
                  color: "#192A3E"
                  }}>
                  Total Area
                  <Text 
                  style={{
                    fontSize: "10px", 
                    color: "#192A3E", 
                    marginLeft: "5px"
                    }}>(SFT)
                  </Text>
                </Text>
                
                <Text 
                strong 
                style={{fontSize: "14px"}}>3000 <FormOutlined style={{cursor: "pointer"}} onClick={handleClick} />
                </Text>
              </div>
              <Divider
              type="vertical" 
              style={{
                height: "50px", 
                backgroundColor: "#C2CFE0", 
                alignSelf: "center"
                }} />
              <div 
              style={{
                width: "50%", 
                display: "flex", 
                flexDirection: "column"
                }}>
                <Text strong style={{fontSize: "12px", color: "#2ED47A", alignSelf: "flex-end"}}>-200</Text>
                <Text strong style={{fontSize: "24px", color: "#2ED47A"}}>3200</Text>
              </div>
            </div>

            <Button 
            type="primary" 
            style={{
              width: "100%", 
              background: "#2ED47A",
              border: "0px",
              borderRadius: "5px"
              }}>You still have some area to cover
            </Button>

          </div>

          <PieChart />
        </div>
    );
}

export default MainLeft;