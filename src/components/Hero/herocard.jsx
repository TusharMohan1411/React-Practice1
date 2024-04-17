import React from "react";
import "./hero.css";

function HeroCard(props) {
    return (
        <div className="heroCard">
            <h2>{props.heroh2}</h2>
            <p>{props.herop}</p>
        </div>
    )
}

export default HeroCard;