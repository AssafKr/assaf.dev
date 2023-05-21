import * as React from "react";
import { useEffect } from "react";
import { CanvasContainer } from "../components/CanvasContainer";

const IndexPage = () => {
  return (
    <main style={{ height: "5000px" }}>
      <div className="flex flex-col h-screen" style={{ position: "fixed" }}>
        <CanvasContainer />
        <p className="text-9xl w-max m-auto">
          Hi{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </p>
      </div>
    </main>
  );
};

export default IndexPage;
