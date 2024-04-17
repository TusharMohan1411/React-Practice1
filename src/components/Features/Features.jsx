import React from "react";
import "./features.css"
import featureItems from "./featureItems";
import ImageCard from "../imageCard/imagecard";


function Features(){

    function makeFeatureItems(featureDetails){
        return(
        <ImageCard
        key={featureDetails.id}
        image={featureDetails.image}
        title={featureDetails.title}
        />
        )
    }

return(
    <section className="allSections" id="featuresSection">
        <div id="features-head">
            <h1>Explore Our Features</h1>
        </div>
        <div className="imageCardsCont">
            {featureItems.map(makeFeatureItems)}
        </div>
    </section>
)
}


export default Features