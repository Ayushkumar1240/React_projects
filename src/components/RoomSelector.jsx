import React from "react";

function RoomSelector({ roomId, onChange }) {
  return (
    <label>
      Choose the chat room:{" "}
      <select value={roomId} onChange={(e) => onChange(e.target.value)}>
        <option value="general">general</option>
        <option value="travel">travel</option>
        <option value="music">music</option>
      </select>
    </label>
  );
}

export default RoomSelector;
