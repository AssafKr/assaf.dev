import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <div className="flex flex-col h-screen">
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
