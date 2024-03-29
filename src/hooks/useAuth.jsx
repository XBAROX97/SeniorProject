import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage,auth, db, createUserWithEmailAndPassword, updateProfile, setDoc, doc } from "../FireBase";
import { signInWithEmailAndPassword } from "firebase/auth";

const useAuth = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const register = async (data, image) => {
      try {
        setLoading(true);
        const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const date = new Date().getTime();
        const displayName = data.displayName;
        const storageRef = ref(storage, `${displayName + date}`);
        await uploadBytesResumable(storageRef, image).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                firstName: data.firstName,
                lastName: data.lastName,
                displayName: data.displayName,
                email: data.email,
                photoURL: downloadURL,
              });
    
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/");
              
              toast.promise(
                Promise.resolve(res.user),
                {
                  loading: "Registering...",
                  success: (newUser) =>
                    `Registration successful! Welcome ${newUser.displayName}`,
                  error: (error) => `${error}`,
                }
              );
            } catch (err) {
              console.log(err);
              setErr(true);
              setLoading(false);
            }
          });
        });
      } catch (err) {
        setErr(true);
        setLoading(false);
      }
    };
    
    
    // const login = async (email, password) => {
    //     try {
    //         const userCredential = await auth.signInWithEmailAndPassword(email, password);
    //         const userDoc = await firestore.collection('users').doc(userCredential.user.uid).get();
    //         const user = userDoc.data();
    //         setCurrentUser(user);
    //         toast.success('Login successful!');
    //     } catch (error) {
    //         toast.error(`Login failed: ${error.message}`);
    //     }
    // };

    // const logout = async () => {
    //     try {
    //         await auth.signOut();
    //         setCurrentUser(null);
    //         toast.success('Logout successful!');
    //     } catch (error) {
    //         toast.error(`Logout failed: ${error.message}`);
    //     }
    // };

    return { currentUser, loading, register };
};

export default useAuth;