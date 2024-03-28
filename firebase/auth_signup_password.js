import "./firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {ValidateEmail} from "./credentialChecker";
import {ValidatePassword} from "./credentialChecker";
import Toast from 'react-native-root-toast';

const auth = getAuth ();
export const signup = (email, password) => {
        if(!ValidateEmail(email)) {
            Toast.show("Email not valid", {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                hideOnPress: true
            });
            return;
        }
        if(!ValidatePassword(password)) {
            Toast.show("Password must be at least 8 chars and Max 30. Have at least an hyper case and lower case char, a number and a special char. Ex: Password_1234", {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                hideOnPress: true
            });
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                Toast.show("Sign up success", {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.BOTTOM,
                    hideOnPress: true
                });
            })
            .catch((error) => {
                Toast.show(`[${error.code}] ${error.message}`, {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.BOTTOM,
                    hideOnPress: true
                });
            });
}