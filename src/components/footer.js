import React from "react"
import { Row, Col } from "antd"

const footer = () => {
  return (
    <div style={{ paddingTop: "60px" }}>
      <Row
        style={{
          backgroundColor: "#e5decf",
          height: "100px",
        }}
        justify="center"
      >
        <Col style={{ paddingTop: "40px" }}>
          <p style={{ fontFamily: "Avenir Light", color: "#000000" }}>
            &copy; Kailey Tam 2020. All rights reserved.
          </p>
        </Col>
      </Row>
    </div>
  )
}
export default footer
