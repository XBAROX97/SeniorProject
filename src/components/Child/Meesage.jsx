import React, { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../../hooks/ChatContext";
import { AuthContext } from "../../hooks/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"} flex flex-row items-center justify-start mb-4`}
    >
      <div className="messageInfo flex flex-row items-center justify-start mr-4">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="text-sm text-gray-500">{new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
      </div>
      <div className="messageContent flex flex-col">
        <p className="text-sm text-white font-medium">{message.text}</p>
        {message.img && <img src={message.img} alt="" className="w-64 h-64 rounded-md mt-2"/>}
      </div>
    </div>
  );
};

export default Message;
