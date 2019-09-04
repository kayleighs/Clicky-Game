import React from 'react';
import "./style.css";

function Cards(props) {
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.handleClick(props.id)}>
        <img className="artist-img" alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Cards