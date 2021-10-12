import React from "react";
import ChatEngineComponent from "../../components/chatEngine/ChatEngineComponent";
import Header from "../../components/header/Header";
import { useHistory } from "react-router";
import { auth } from "../../firebase.js/firebase";

export default function Chat() {
  const history = useHistory();
  const handleLogOut = async () => {
    await auth.signOut();
    history.push("/");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  };
  return (
    <div className='chat'>
      <Header handleLogOut={handleLogOut} />
      <ChatEngineComponent userName={""} userSecret={""} />
    </div>
  );
}
