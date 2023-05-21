import React, { useEffect, useRef } from "react";
import { createScene } from "./3d-hand";

export const CanvasContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    createScene(containerRef.current);
  });

  return <div style={{ position: "absolute" }} ref={containerRef} />;
};
