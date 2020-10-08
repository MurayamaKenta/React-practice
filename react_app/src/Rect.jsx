import React from 'react';

function Rect01(props) {
  const style = {
    backgroundColor: props.c,
    position: 'absolute',
    top: `${props.x}px`,
    left: `${props.y}px`,
    width: `${props.w}px`,
    height: `${props.h}px`,
    borderRadius: `${props.r}px`,
  };
  return <div style={style}></div>;
}

export default Rect01;
