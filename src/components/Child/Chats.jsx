import { useContext, useEffect, useState } from "react";
import { db } from "../../FireBase";
import { AuthContext } from "../../hooks/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { ChatContext } from '../../hooks/ChatContext';

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { dispatch, } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className='overflow-hidden hover:overflow-y-scroll w-full mt-2' tabIndex={1}>
      {/* Load chats */}
      {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
        <div key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
          className='flex gap-2 border-t bg-gray-50 border-gray-300 transition-all duration-100 cursor-pointer select-none px-4 py-2 '
        >
          <div className="flex py-3">
            <img draggable={false} height={10} width={10} className='w-10 h-10 rounded-full' src={chat[1].userInfo.photoURL} alt='User avatar' />
          </div>
          <div className='w-full p-2 flex flex-col gap-2'>
            <p className='text-lg font-bold capitalize'>{chat[1].userInfo.displayName}</p>
            <p className='text-slate-500 leading-5'>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Chats;