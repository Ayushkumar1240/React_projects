import React, { useEffect, useState } from "react";

const Comp2UseEffect = () => {
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <div>{windowWidth}</div>;
};

export default Comp2UseEffect;
