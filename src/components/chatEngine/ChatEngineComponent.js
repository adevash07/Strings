import React, { useEffect } from "react";
import axios from "axios";
import { ChatEngine } from "react-chat-engine";
// import ChatFeed from "../chatfeed/ChatFeed";

import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router";

export default function ChatEngineComponent({ userName, userSecret }) {
  const { user } = useAuth();
  const history = useHistory();
  const localStorageItem = {
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
  };
  const getfile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user && !localStorageItem.username) {
      history.push("/");
      return;
    }

    if (user) {
      axios
        .get("https://api.chatengine.io/users/me", {
          headers: {
            "Project-ID": process.env.REACT_APP_STRING_ID,
            "User-Name": user.email,
            "User-Secret": user.uid,
          },
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.message);
          console.log(error.request);
          let formData = new FormData();
          formData.append("email", user.email);
          formData.append("username", user.email);
          formData.append("secret", user.uid);
          getfile(user.photoURL).then((avatar) => {
            formData.append("avater", avatar, avatar.name);

            axios
              .post("https://api.chatengine.io/users", formData, {
                headers: {
                  "Private-Key": process.env.REACT_APP_STRING_KEY,
                  "Project-ID": process.env.REACT_APP_STRING_ID,
                },
              })
              .catch((error) => {
                console.log(error);
              });
          });
        });
    }

    return () => {};
  }, [user, history, localStorageItem.username]);
  return (
    <ChatEngine
      height='calc(100vh - 50px)'
      projectID={process.env.REACT_APP_STRING_ID}
      userName={
        localStorageItem.username !== null
          ? localStorageItem.username
          : user
          ? user.email
          : " "
      }
      userSecret={
        localStorageItem.username !== null
          ? localStorageItem.password
          : user
          ? user.uid
          : " "
      }
      // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}
