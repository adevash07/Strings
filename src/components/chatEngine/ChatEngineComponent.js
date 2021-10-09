import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatEngine } from "react-chat-engine";
// import ChatFeed from "../chatfeed/ChatFeed";

import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router";

export default function ChatEngineComponent({ userName, userSecret }) {
  const { user } = useAuth();
  console.log(user.uid);
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(" ");

  const getfile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "Project-ID": process.env.STRING_ID,
          "User-Name": user.email,
          "User-Secret": user.uid,
        },
      })
      .then(() => setLoading(false))
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
                "Private-Key": process.env.STRING_KEY,
                "Project-ID": process.env.STRING_ID,
              },
            })
            .then(() => setLoading(false))
            .catch((error) => {
              setError(error);
              console.log(error.response);
              console.log(error.message);
              console.log(error.request);
            });
        });
      });

    return () => {};
  }, [user, history]);
  return (
    <ChatEngine
      height='calc(100vh - 50px)'
      projectID={process.env.STRING_ID}
      userName={user.email}
      userSecret={user.uid}
      // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}
