import React from "react";
import HeroCard from "./herocard";
import heroItems from "./heroitems";
import "./hero.css";

function Hero() {

    function makeHeroCard(details){
        return(
            <HeroCard
            key={details.id}
            heroh2={details.heroh2}
            herop={details.herop}
            />
        )
    }

    return (
        <section className="heroSection">
            <section className="heroSectionDark">
                <section className="allSections" id="heroSectionCont">
                    <div id="heroText">
                    <h1>Video Conferencing Platform</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra, quam rhoncus fringilla commodo, lorem magna tempor maximus eros quam lorem.</p>
                    </div>
                    <div className="heroCardCont">
                        {heroItems.map(makeHeroCard)}
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Hero

