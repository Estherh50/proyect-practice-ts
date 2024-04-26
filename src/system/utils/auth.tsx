import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from "firebase/auth";
import { auth, db } from "../model/firebase";
import { doc, setDoc } from "firebase/firestore";


export const login = async (
    email: string,
    password: string
): Promise<User | null> => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        return res.user;
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            alert(err.message);
        } else {
            console.error("Unexpected error", err);
        }
        return null;
    }
};

export const register = async (
    name: string,
    email: string,
    password: string
): Promise<User | null> => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const dataUser = res.user;

        const userData = {
            uid: dataUser.uid,
            name,
            email: dataUser.email,
        };

        await setDoc(doc(db, "users", dataUser.uid), userData);

        return dataUser;
    } catch (err) {
        if (err instanceof Error) {
            // Handle authentication-specific errors gracefully
            console.error(err.message);
            alert(err.message);
        } else {
            console.error("Unexpected error", err);
        }
        return null; // Return null in case of error
    }

}
