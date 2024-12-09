import React, { useState } from "react";

const Comp1UseState = () => {
  const [value, setValue] = useState({ count: 0, theme: "blue" });
  const count = value.count;
  const theme = value.theme;
  function decrementValue() {
    setValue((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }
  function incrementValue() {
    setValue((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }
  return (
    <div>
      <button onClick={decrementValue}>-</button>
      <span>
        {count}-{theme}
      </span>
      <button onClick={incrementValue}>+</button>
    </div>
  );
};

export default Comp1UseState;
