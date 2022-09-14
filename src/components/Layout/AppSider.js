import React from 'react';
import { Image } from 'antd'

const AppSider = () => {

    return (
        <div 
        style={{
          height: "100vh", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between"
          }}>
          <div><Image src="officeBanaoLogo.png" preview={false} style={{cursor: "pointer"}} /></div>
          <div 
          style={{
            height: "60vh", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-around"
            }}>
            <div>
                <div><Image
                 src="avatar1.png" 
                 preview={false} 
                 style={{
                  cursor: "pointer"
                  }} />
                </div>
                <div><Image 
                src="avatar2.png" 
                preview={false} 
                style={{
                  cursor: "pointer"
                  }} />
                </div>
                <div><Image 
                src="avatar3.png" 
                preview={false} 
                style={{
                  cursor: "pointer"
                  }} />
                </div>
            </div>
            <div><Image 
            src="exit.png" 
            preview={false} 
            style={{
              cursor: "pointer"
              }} />
            </div>
          </div>
        </div>
    );
}

export default AppSider;