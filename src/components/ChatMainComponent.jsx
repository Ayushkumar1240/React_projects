import { useState } from "react";
import ChatRoom from "./ChatRoom";
import RoomSelector from "./RoomSelector";

function ChatMainComponent() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);

  return (
    <>
      <RoomSelector roomId={roomId} onChange={setRoomId} />
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}

export default ChatMainComponent;
