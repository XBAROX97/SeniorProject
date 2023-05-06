import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, auth, db, createUserWithEmailAndPassword, updateProfile, setDoc, doc } from "../FireBase";

const useAuth = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const register = async (data, image) => {
        try {
          setLoading(true);
          const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      
          //Create a unique image name
          const date = new Date().getTime();
          const displayName = data.displayName; // add this line to define displayName
          const storageRef = ref(storage, `${displayName + date}`);
        
          await uploadBytesResumable(storageRef, image).then(() => {
            getDownloadURL(storageRef).then(async (downloadURL) => {
              try {
                //Update profile
                await updateProfile(res.user, {
                  displayName,
                  photoURL: downloadURL,
                });
                //create user on firestore
                await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                firstName: data.firstName,
                lastName: data.lastName,
                displayName: data.displayName,
                email: data.email, // change email to data.email
                photoURL: downloadURL,
                });
        
                //create empty user chats on firestore
                await setDoc(doc(db, "users", res.user.uid), {});
                navigate("/");
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
        toast.promise(
            register(data, image),
            {
              loading: "Registering...",
              success: (newUser) => `Registration successful for ${newUser.firstName + " " + newUser.lastName}!`,
              error: (error) => `${error}`
            }
          );
      };
      
      // move this function call inside the register function
   
      

    const login = async (email, password) => {
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            const userDoc = await firestore.collection('users').doc(userCredential.user.uid).get();
            const user = userDoc.data();
            setCurrentUser(user);
            toast.success('Login successful!');
        } catch (error) {
            toast.error(`Login failed: ${error.message}`);
        }
    };

    const logout = async () => {
        try {
            await auth.signOut();
            setCurrentUser(null);
            toast.success('Logout successful!');
        } catch (error) {
            toast.error(`Logout failed: ${error.message}`);
        }
    };

    return { currentUser, loading, register, login, logout };
};

export default useAuth;