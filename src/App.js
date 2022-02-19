import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import MessageInput from "./components/MessageInput";
import MessagesContainer from "./components/MessagesContainer";
import {sendMessageAction } from "./store/messageReducer";

const App = () => {
  const [messageText, setMessageText] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messagesState.messages);

  const currentDate =
    new Date().getMinutes() < 10
      ? `${new Date().getHours()}:0${new Date().getMinutes()}`
      : `${new Date().getHours()}.${new Date().getMinutes()}`;

  const sendMessage = () => {
    const newMessage = {
      id: messages.length + 1,
      body: messageText,
      date: currentDate,
    };
    dispatch(sendMessageAction(newMessage));
    setMessageText("");
  };

  return (
    <div className="app">
      <MessagesContainer messages={messages}/>
      <MessageInput
        messageText={messageText}
        setMessageText={setMessageText}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default App;
