import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import Message from './Meesage'
import { ChatContext } from "../../hooks/ChatContext";
import { db } from "../../FireBase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);
  
  return (
    <section className='px-4 py-2  flex gap-3 justify-end items-center'>
      <div className="w-full">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
      </div>
    </section>
  )
}

export default Messages