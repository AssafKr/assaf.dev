import * as React from "react";
import screenshot from "../../static/night-sky-beter-tileset.png";

const Screenshot = () => {
  return (
    <img
      src={screenshot}
      style={{ imageRendering: "pixelated", height: "100vh" }}
    />
  );
};

export default Screenshot;
