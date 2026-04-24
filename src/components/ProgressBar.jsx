import React, { useEffect, useState } from "react";

const ProgressBar = ({ value = 0 }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);
  //   const maxValue =

  return (
    <div className="progress">
      <span
        style={{
          //   width: `${percent}%`,
          color: `${percent > 49 ? "white" : "black"}`,
        }}
      >
        {percent.toFixed()}%
      </span>
      <div
        style={{
          width: `${percent}%`,
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      ></div>
    </div>
  );
};

export default ProgressBar;
