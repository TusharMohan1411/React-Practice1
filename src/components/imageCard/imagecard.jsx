import React from "react";
import "./imagecard.css"

function ImageCard(props) {
    return (
        <div className="imageCard">
            <div className="imageCardImg">
            <img src={props.image} alt="cardImage" />
            </div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
        
    )
}

export default ImageCard;