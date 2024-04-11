import app from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {ValidateEmail, ValidatePassword} from "./credentialChecker";

const auth = getAuth(app);
export const signup = (email, password) => {
    if(!ValidateEmail(email)) {
        console.error("email not valid")
    } else if(!ValidatePassword(email)) {
        console.error("password not valid")
    } else {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                // ...
                console.log(user)
                console.log("signup success")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
            });
    }
}
