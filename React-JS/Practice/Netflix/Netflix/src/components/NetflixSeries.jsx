import React from "react";
import SeriesData from "../API/SeriesData.json";
import SeriesCard from "../SeriesCard";


function NetflixSeries() {
  return (
    <ul>
      {SeriesData.map((curEle) => (<SeriesCard key={curEle.id} data={curEle}  />))}
    </ul>
  );
}

export default NetflixSeries;
