import React from 'react';
import { Layout } from 'antd';
import AppContent from './AppContent'
import AppSider from './AppSider'

const AppLayout = () => {

  const { Header, Sider, Content } = Layout;
    
  return (
    <Layout>

      <Sider
      width="4vw"
      style={{
        backgroundColor: "#121942", 
        color: "white"
        }}><AppSider />
      </Sider>

      <Layout>
        <Header 
        style={{
          backgroundColor: "#E9EDF3", 
          display: "flex", height: "52px"
          }}>
            <div 
            style={{
              backgroundColor: "#FDFDFD", 
              padding: "9px", 
              borderRadius: "10px 10px 0px 0px"
            }}>Project
            </div>
        </Header>
        <Content 
        style={{
          backgroundColor: "#FDFDFD"
          }}><AppContent />
        </Content>
      </Layout>

    </Layout>
  );
}

export default AppLayout;