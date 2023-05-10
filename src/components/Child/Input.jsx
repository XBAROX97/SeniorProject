import React, { useContext, useState } from "react";
import { AuthContext } from "../../hooks/AuthContext";
import { ChatContext } from "../../hooks/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp, Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../FireBase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FcAddImage } from "react-icons/fc";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async (e) => {
    e.preventDefault();
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          // TODO: Handle Error
        },
        () => {
          setText("");
          setImg(null);
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      setText("");
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
  };

  return (
    <form onSubmit={handleSend} className="flex items-center justify-between bg-gray-100 h-16 px-4 border border-gray-400">
      <input
        type="text"
        placeholder="Type something..."
        className="flex-grow px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg border border-gray-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Type something"
      />
      <div className="flex items-center">
        <label htmlFor="image-upload" className="mr-2 cursor-pointer">
          <FcAddImage className="h-10 w-10" />
        </label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={(e) => setImg(e.target.files[0])}
          className="hidden"
          aria-label="Upload image"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          type="submit"
          disabled={!text}
          aria-label="Send message"
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default Input


{/* <div className="flex items-center justify-between bg-slate-50 h-16 px-4 rounded-lg border border-gray-400">
    <input
      type="text"
      placeholder="Type something..."
      className="flex-grow px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg border border-gray-400"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <div className="flex items-center space-x-4">
      <label htmlFor="image-upload" className="cursor-pointer">
        <FcAddImage className="text-gray-600 hover:text-blue-500" />
      </label>
      <input
        type="file"
        id="image-upload"
        className="hidden"
        onChange={(e) => setImg(e.target.files[0])}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        onClick={handleSend}
      >
        Send
      </button>
      <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
        <FiSmile className="text-xl" />
      </button>
    </div>
  </div> */}