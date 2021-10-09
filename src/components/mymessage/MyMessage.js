import React from "react";

export default function MyMessage({ message }) {
  console.log(message);
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt='message__attachment'
        className='message__image'
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className='message'
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3b1305",
      }}>
      {message.text}
    </div>
  );
}
