import { db } from "../../FireBase";
import { AiOutlineSearch } from 'react-icons/ai';
import React, { useContext, useState } from "react";
import { AuthContext } from '../../hooks/AuthContext';
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    console.log("im here")
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    console.log("step1" + combinedId)
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        console.log("step2" + combinedId)

        //create user chats
            await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        console.log("step4" + combinedId)

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        console.log("step3" + combinedId)

      }
    } catch (err) {}

    setUser(null);
    setUsername("")
  };
  return (
    <div className="flex flex-col items-center">
    <div className="w-full max-w-sm mt-6">
      <input
        className="appearance-none block w-full px-4 py-3 leading-tight placeholder-gray-500 border rounded-md focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Find a user"
        onKeyDown={handleKey}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
    </div>
    {err && <span className="text-red-500 mt-2">User not found!</span>}
    {user && (
      <div onClick={handleSelect} className="w-full max-w-sm mt-2">
        <div className="flex items-center bg-white rounded-md cursor-pointer hover:bg-blue-200 shadow-md hover:shadow-lg">
            <img className="w-16 h-16 object-cover rounded-lg" src={user.photoURL} alt="" />
          <div className="px-4 py-2">
            <span className="text-gray-800 font-medium">{user.displayName}</span>
          </div>
        </div>
      </div>
    )}
  </div>
  


  );
};

export default Search;