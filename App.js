import React from "react";
import Main from "./MyComponents/Main";
import { Messages } from "./MyComponents/Messages.js";
import { AddMessage } from "./MyComponents/AddMessage";
import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  let initMessage;
  if (localStorage.getItem("messages") === null) {
    initMessage = [];
  } else {
    initMessage = JSON.parse(localStorage.getItem("messages"));
  }
  const onDelete = (message) => {
    console.log("iam on delete", message);
    setMessages(
      messages.filter((e) => {
        return e !== message;
      })
    );
    console.log("deleted", messages);
    localStorage.setItem("messages", JSON.stringify(messages));
  };
  const addMessage = (message) => {
    console.log("i am adding this Message", message);

    const myMessage = {
      message: message,
    };
    setMessages([...messages, myMessage]);
    console.log(myMessage);
  };

  const [messages, setMessages] = useState(initMessage);
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);
  return (
    <div className="top">
      <Main />
      <AddMessage addMessage={addMessage} />
      <Messages messages={messages} onDelete={onDelete} />
    </div>
  );
}
