import React from 'react';
import Item from './Item'
import { Col, Row } from 'antd'

const MainRight = () => {

    return (
        <div>
          <Row gutter={[16, 24]}>
            <Col span={8}><Item value="Linear Workstation" /></Col>
            <Col span={8}><Item value="Cubical/L-Type" /></Col>
            <Col span={8}><Item value="Cubical/L-Type" /></Col>
            <Col span={8}><Item value="Linear Workstation" /></Col>
            <Col span={8}><Item value="Cubical/L-Type" /></Col>
            <Col span={8}><Item value="Cubical/L-Type" /></Col>
          </Row>
        </div>
    );
}

export default MainRight;