import React from "react";

export const MessageItem = ({ message, onDelete }) => {
  return (
    <>
      <div>
        <h4>{message.message}</h4>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => {
            onDelete(message);
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};
