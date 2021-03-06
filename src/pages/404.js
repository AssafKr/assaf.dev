import * as React from "react";

// markup
const NotFoundPage = () => {
  return (
    <main>
      <div className="flex flex-col h-screen">
        <p className="text-9xl w-max m-auto">
          Huh?{" "}
          <span role="img" aria-label="shrugging man">
            🤷‍♂️
          </span>
        </p>
      </div>
    </main>
  );
};

export default NotFoundPage;
