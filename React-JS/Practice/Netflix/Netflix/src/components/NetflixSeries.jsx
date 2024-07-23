import React from "react";
import SeriesData from "../API/SeriesData.json";

const NetflixSeries = () => {
  return (
    <>
      <div>
        <img
          src={SeriesData[0].img_url}
          alt="10"
          style={{
            width: "300px",
            height: "auto",
          }}
        />
      </div>
      <h1>{SeriesData[0].name}</h1>
      <div>
        <img
          src={SeriesData[1].img_url}
          alt="1"
          style={{
            width: "300px",
            height: "auto",
          }}
        />
      </div>
      <h1>{SeriesData[1].name}</h1>
    </>
  );
};

export default NetflixSeries;
