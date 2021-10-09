import React, { useState } from "react";
import { SiSpringCreators } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import axios from "axios";
import "./login.scss";
import firebase from "firebase/compat/app";

import { auth } from "../../firebase.js/firebase";

export default function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": process.env.STRING_ID,
      "User-Name": userName,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", userName);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (error) {
      seterror("Opps, in correct credentials");
      setTimeout(() => {
        seterror(" ");
      }, 2000);
    }
  };
  return (
    <div className='wrapper'>
      <h1 className='title'>
        String <SiSpringCreators /> Chat
      </h1>
      <form className='form' onSubmit={handleSubmit}>
        <label className='label' htmlFor='username'>
          UserName :
        </label>
        <input
          name='username'
          className='form__input'
          type='text'
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
          required
        />
        <label className='label' htmlFor=''>
          Password :
        </label>
        <input
          name='password'
          className='form__input'
          type='password'
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        <div align='center'>
          <button type='submit' className='btn' onSubmit={handleSubmit}>
            <span>Start Chatting</span>
          </button>
        </div>
      </form>
      <h2>{error}</h2>

      <div className='signup'>
        <h4> Don't Have an Account ?, Sign Up Below :</h4>
        <form className='signUpForm' action=''>
          <button
            name='google'
            className='button__input'
            type='button'
            id='google'
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            }>
            <FcGoogle size={20} /> Sign in with Google
          </button>

          <button
            name='facebook'
            className='button__input'
            type='button'
            id='facebook'
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
            }>
            <BsFacebook size={20} fill='blue' /> Sign in with Facebook
          </button>
        </form>
      </div>
    </div>
  );
}
