import React, { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "../../hooks/ChatContext";
import { AuthContext } from "../../hooks/AuthContext";
import { doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "../../FireBase";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const curr = currentUser.uid === message.senderId;

  const { data } = useContext(ChatContext);

  const ref = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (showDropdown) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showDropdown]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

   const handleDelete = async () => {
    console.log("Delete message:", message.id);
    console.log("Delete message:", message.text);
    console.log("Delete chat:", data.chatId.text);

    if (!showDropdown) {
      return;
    }

    setShowDropdown(false);


  };

  return (
    <div
      ref={ref}
      className={`flex items-start justify-start gap-3 mb-4 ${
        curr ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="w-8 h-8 rounded-full"
        />
      </div>
      <div className={`flex flex-col max-w-[500px]`}>
        <div
          className={`cursor-pointer transition-[background-color] duration-150 text-white rounded-lg px-4 py-2 ${
            curr
              ? "bg-green-800 hover:bg-green-900"
              : "bg-blue-800 hover:bg-blue-900"
          }`}
          onClick={toggleDropdown}
        >
          <p className="text-sm">{message.text}</p>
          {message.img && (
            <img
              src={message.img}
              alt=""
              className="w-64 h-64 rounded-md mt-2"
            />
          )}
          <span className="mt-3 flex select-none justify-end text-sm text-slate-400">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        {showDropdown && (
          <div className="mt-2">
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-2 py-1 rounded-md"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
