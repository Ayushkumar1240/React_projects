import { useState, useEffect } from "react";
import { createConnection } from "./chat";
import ServerInput from "./ServerInput";

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <>
      <ServerInput serverUrl={serverUrl} onChange={setServerUrl} />
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default ChatRoom;
