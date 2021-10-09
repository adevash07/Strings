import React from "react";
import { MessageForm, MyMessage, TheirMessage } from "../index";

export default function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];
  const renderReadReceipts = (message, isMyMessage) => {
    chat.people.map((person, index) => {
      return (
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className='read__receipts'
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage: `url(${person?.person?.avatar})`,
            }}
          />
        )
      );
    });
  };

  const renderMessages = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className='message__block'>
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className='read__receipts'
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return "Loading.....";
  return (
    <div className='chat__feed'>
      <div className='chat__title__con'>{chat.title}</div>
      <div className='chat__title'>
        {chat.people.map((person) => `${person.person.username}`)}
      </div>
      <div
        style={{
          height: "100px",
        }}
      />
      <div className='message__form__con'>
        <MessageForm {...props} chatId={activeChat} />
      </div>
      {renderMessages()}
    </div>
  );
}
