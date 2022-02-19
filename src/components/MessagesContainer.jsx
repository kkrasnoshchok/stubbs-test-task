import React from "react";
import Message from "./Message";

const MessagesContainer = ({messages}) => {
  return (
    <div className="messages">
      {messages.map(({ id, body, date }) => (
        <Message key={id} body={body} date={date} id={id}/>
      ))}
    </div>
  );
};

export default MessagesContainer;
