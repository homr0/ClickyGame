import React from "react";
import "./style.css";

const ImageCard = (props) => {
  return (
    <div className="col s12 m3">
      <div className="card hoverable" onClick={() => props.updateScore(props.id)}>
        <div className="card-image center">
          <img src={props.image} alt={props.name} />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;