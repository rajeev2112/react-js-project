import React from "react";
import { MessageItem } from "./MessageItem";

export const Messages = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">please enter something!</h3>
      {props.messages.length === 0
        ? "nothing to display"
        : props.messages.map((message) => {
            return <MessageItem message={message} onDelete={props.onDelete} />;
          })}
    </div>
  );
};
