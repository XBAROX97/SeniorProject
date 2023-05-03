import { useState } from "react";
import { toast } from "react-hot-toast";
import { auth, db, createUserWithEmailAndPassword, updateProfile, setDoc, doc } from "../FireBase";

const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const register = async (data) => {
        setLoading(true)
        const registrationPromise = createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (userCredential) => {
                await updateProfile(userCredential.user, {
                    displayName: data.displayName
                });
                const newUser = {
                    uid: userCredential.user.uid,
                    email: userCredential.user.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    displayName: data.displayName
                };
                await setDoc(doc(db, 'users', userCredential.user.uid), newUser);
                setCurrentUser(newUser);
                setLoading(false)
                return newUser;
            })
            .catch((error) => {
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