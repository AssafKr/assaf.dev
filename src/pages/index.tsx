import * as React from "react";
import { useEffect } from "react";
import { createScene } from "../components/3d-hand";

const IndexPage = () => {
  useEffect(() => {
    createScene();
  }, []);
  return (
    <main>
      <div className="flex flex-col h-screen">
        <p className="text-9xl w-max m-auto">
          Hiush{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </p>
      </div>
    </main>
  );
};

export default IndexPage;
