import "./firebaseConfig.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth ();
export const signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            console.log("signin success")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
        });
}