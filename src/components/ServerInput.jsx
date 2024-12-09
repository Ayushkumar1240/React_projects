import React from "react";

function ServerInput({ serverUrl, onChange }) {
  return (
    <label>
      Server URL:{" "}
      <input value={serverUrl} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}

export default ServerInput;
