import React, { useState } from "react";

export const AddMessage = ({ addMessage }) => {
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!message) {
      alert("message cannot be blank");
    } else {
      addMessage(message);
      setMessage("");
    }
  };
  return (
    <div className="container my-3">
      <h3>Add Your Message</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title">Message</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            id="message"
          />
        </div>
      </form>
    </div>
  );
};
