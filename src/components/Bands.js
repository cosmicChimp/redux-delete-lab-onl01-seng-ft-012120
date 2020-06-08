import React from "react";
import Band from "./Band";

const Bands = (props) => {
  const bands = props.bands.map((band) => {
    return (
      <div>
        <Band delete={props.delete} {...band} key={band.id} />
      </div>
    );
  });
  return <div>{bands}</div>;
};

export default Bands;
