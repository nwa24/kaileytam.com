import React from 'react';

export default function LineBreak({ width, colour }) {
  return (
    <>
      <hr
        style={{
          width: `${width}`,
          border: `1px solid ${colour}`,
        }}
      />
    </>
  );
}
