// import { db } from "../FireBase";
// import { AuthContext } from "./AuthContext";
// import { doc, onSnapshot } from "firebase/firestore";
// import { ChatContext } from "./ChatContext";
// import { useContext, useEffect, useState } from "react";

// const useChats = () => {
//     const [chats, setChats] = useState([]);
//     const { currentUser } = useContext(AuthContext);
//     const { dispatch } = useContext(ChatContext);

//    useEffect(() => {
//     const getChats = () => {
//       const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
//         setChats(doc.data());
//       });

//       return () => {
//         unsub();
//       };
//     };

//     currentUser.uid && getChats();
//   }, [currentUser.uid]);

//     const getChat = () => {
//         // return chats;
//     }

//     return { chats, getChat };
// }

// export default useChats;