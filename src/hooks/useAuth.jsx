import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage,auth, db, createUserWithEmailAndPassword, updateProfile, setDoc, doc } from "../FireBase";

const useAuth = () => {
    const navigate = useNavigate();
    
    const [err, setErr] = useState(false);

    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const register = async (data, image) => {
    
        setLoading(true)
        const registrationPromise = createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (userCredential) => {
                const date = new Date().getTime();
                const storageRef = ref(storage, `${displayName + date}`);
          
                console.log(userCredential, data, image)
                // Upload the image file to Firebase storage
                if (image) {

                    
                  }
                  
    
                await updateProfile(userCredential.user, {
                    displayName: data.displayName
                });  
                const newUser = {
                    uid: userCredential.user.uid,
                    email: userCredential.user.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    displayName: data.displayName,
                    image: image
                };
                
                await setDoc(doc(db, 'users', userCredential.user.uid), newUser);
                navigate("/");
                setCurrentUser(newUser);
                setLoading(false)
                return newUser;
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
                throw new Error(error.code);
            });
            toast.promise(
                registrationPromise,
                {
                    loading: "Registering...",
                    success: (newUser) => `Registration successful for ${newUser.firstName + " " + newUser.lastName}!`,
                    error: (error) => `${error}`
                }
            );
    };
    
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