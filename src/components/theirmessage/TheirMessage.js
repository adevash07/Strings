import React from "react";

export default function TheirMessage({ message, lastMessage }) {
  const isfirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  console.log(message.text);
  return (
    <div className='message__row'>
      {isfirstMessageByUser && (
        <div
          className='message__avatar'
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt='message__attachment'
          className='message__image'
          style={{ marginLeft: isfirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className='message'
          style={{
            float: "left",
            backgroundColor: "#CABCDC",
          }}>
          {message.text}
        </div>
      )}
    </div>
  );
}
