import React, { useEffect, useMemo, useState } from "react";

const Comp1UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]); // Only recompute when number changes

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  },[dark]);
  useEffect(() => {
    console.log("Theme Style Changed");
  }, [themeStyle]); // Only recompute when themeStyle changes
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
  function slowFunction(num) {
    for (let i = 0; i <= 10000000; i++) {}
    return num * 2;
  }
};

export default Comp1UseMemo;
