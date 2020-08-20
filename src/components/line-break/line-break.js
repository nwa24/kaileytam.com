import React from "react"

const LineBreak = props => {
  return (
    <>
      <hr
        style={{
          width: `${props.width}`,
          border: `1px solid ${props.colour}`,
        }}
      />
    </>
  )
}

export default LineBreak
