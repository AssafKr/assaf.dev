import React, { useState } from "react";

const Hovered: React.FC = ({ children }) => {
  console.log("render!");
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ background: isHovered ? "red" : "none" }}
    >
      {children}
    </div>
  );
};

const test = () => {
  return (
    <div style={{ height: "5000px" }} onScroll={e => console.log("scroll!")}>
      {/* {[...Array(100).keys()].map((i) => {
        return <Hovered key={i}>{i}</Hovered>;
      })} */}
    </div>
  );
};

export default test;
