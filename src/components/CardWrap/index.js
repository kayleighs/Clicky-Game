import React from 'react';
import "./style.css";

function CardWrap(props) {
  return (
    <div className="img-wrap">
      {props.children}
    </div>
  );
}

export default CardWrap