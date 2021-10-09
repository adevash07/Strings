import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { FiSend, FiMic } from "react-icons/fi";

export default function MessageForm(props) {
  const [value, setvalue] = useState(" ");
  const { chatId, creds } = props;

  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: " " });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }
  };
  const handleChange = (e) => {
    setvalue(e.target.value);
    isTyping(props, chatId);
    setvalue(" ");
  };
  return (
    <form className='message__form' onSubmit={handleSubmit}>
      <input
        className='message__input'
        onSubmit={handleSubmit}
        placeholder='Send Message'
        value={value}
        onChange={handleChange}
        name='sendMessage'
      />
      <label htmlFor='message__upload'>
        <span className='message__mic'>
          <FiMic />
        </span>
      </label>
      <input
        type='file'
        id='upload__button'
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <button type='submit' class='send__button'>
        <FiSend />
      </button>
    </form>
  );
}
