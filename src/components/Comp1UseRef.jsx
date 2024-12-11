import React, { useState, useRef, useEffect } from "react";

const Comp1UseRef = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");
  useEffect(() => {
    prevName.current = name;
  });
  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>
        My name is {name} and my previous name used to be {prevName.current}
      </div>
    </div>
  );
};

export default Comp1UseRef;
