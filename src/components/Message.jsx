import React from "react";
import { useDispatch } from "react-redux";
import { deleteMessageAction } from "../store/messageReducer";

const Message = ({ id, body, date, deleteMessage }) => {
  const dispatch = useDispatch();


  return (
    <div className="message" onClick={() => {
      dispatch(deleteMessageAction(id));
    }}>
      <div className="messageText">{body}</div>
      <div className="messageDate">{date}</div>
    </div>
  );
};

export default Message;
