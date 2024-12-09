import React, { useEffect, useState } from "react";

const Comp1UseEffect = () => {
  const [state, setState] = useState("Posts");
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://freefakeapi.io/api/${state}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [state]);
  return (
    <div>
      <button
        onClick={() => {
          setState("posts");
        }}
      >
        Posts
      </button>
      <button onClick={() => setState("users")}>Users</button>
      <button
        onClick={() => {
          setState("comments");
        }}
      >
        Comments
      </button>
      <br />
      <h2>{state}</h2>
      {items.map((item) => (
        <pre>{JSON.stringify(item)}</pre>
      ))}
    </div>
  );
};

export default Comp1UseEffect;
