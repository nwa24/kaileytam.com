import { Row, Col } from 'antd';
import React from 'react';

export default function footer() {
  return (
    <div className="absolute bottom-0 w-full h-20">
      <Row
        style={{
          backgroundColor: '#e5decf',
          height: '100%',
          width: '100%',
        }}
        justify="center"
        align="middle"
      >
        <Col>
          <p style={{ fontFamily: 'Avenir Light', color: '#000000' }}>
            &copy; Kailey Tam 2020. All rights reserved.
          </p>
        </Col>
      </Row>
    </div>
  );
}
