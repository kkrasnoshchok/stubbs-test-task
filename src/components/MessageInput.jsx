import React from "react";

const MessageInput = (props) => {
  return (
    <div className="messageInput">
      <input
        type={"text"}
        value={props.messageText}
        placeholder={"type your message here"}
        onChange={(e) => props.setMessageText(e.target.value)}
        className="messageInputText"
      />
      <button
        type="submit"
        className="messageInputButton"
        onClick={() => props.sendMessage()}
      ></button>
    </div>
  );
};

export default MessageInput;
