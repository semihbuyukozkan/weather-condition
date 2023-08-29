import React, { useState } from "react";
import Weather from "./Weather";

function Background(props) {
  const backgroundStyle = {
    backgroundImage: `url('${props.backgroundImage}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  };

  return <div style={backgroundStyle}>{props.children}</div>;
}

export default Background;
