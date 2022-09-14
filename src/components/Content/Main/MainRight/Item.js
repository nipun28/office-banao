import React from 'react';
import { Image, Typography, InputNumber } from 'antd'

const Item = (props) => {

    const {Text } = Typography;

    const onChange = (value) => {
      console.log(`changed ${value}`);
    };

    return (
        <div
        style={{
          border: "1px solid #C2CFE0", 
          borderRadius: "4.4px", 
          padding: "9px"
          }}>
          <div>
            <Image
             width={186}
             src="emptyProductImage.png" 
             preview={false} />
          </div>
          <div
          style={{
            display: "flex", 
            justifyContent: "space-between", 
            margin: "10px"
            }}>
            <Text strong style={{fontSize: "12px"}}>{props.value}</Text>
            <InputNumber 
            size="small" 
            min={0} 
            max={99} 
            defaultValue={0} 
            onChange={onChange} 
            style={{width: "55px"}} />
          </div>
          <div>
            <Text 
            style={{
              fontSize: "10px"
              }}>This space is for a 2 liner short description.
            </Text>
          </div>
        </div>
    );
}

export default Item;