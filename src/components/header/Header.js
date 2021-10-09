import React from "react";
import { SiSpringCreators } from "react-icons/si";
import "./header.scss";

export default function Header({ handleLogOut }) {
  return (
    <div className='header'>
      <h2 className='logo'>
        <SiSpringCreators /> Chat
      </h2>
      <button onClick={() => handleLogOut()}>Log Out</button>
    </div>
  );
}
