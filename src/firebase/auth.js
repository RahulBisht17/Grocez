import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  FacebookAuthProvider,
} from "firebase/auth";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { auth, db } from "./firebase";

export const SignUpWithEmail = async (email, password, fname, lname) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  if (user) {
    await setDoc(doc(db, "Users", user.uid), {
      email: user.email,
      firstName: fname,
      lastName: lname,
    });
  }
};
export const LoginWithEmail = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const SignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  const user = result.user;
  const userDoc = await getDoc(doc(db, "Users", user.uid));
  console.log(user);

  if (!userDoc.exists()) {
    // User is new, store in Firestore
    await setDoc(doc(db, "Users", user.uid), {
      email: user.email,
      firstName: user.displayName?.split(" ")[0] || "First Name",
      lastName: user.displayName?.split(" ")[1] || "Last Name",
      photoUrl: user.photoURL,
    });
  }

  return result;
};

export const signInWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  const result = await signInWithPopup(auth, provider);

  const user = result.user;
  const userDoc = await getDoc(doc(db, "Users", user.uid));

  if (!userDoc.exists()) {
    // User is new, store in Firestore
    await setDoc(doc(db, "Users", user.uid), {
      email: user.email,
      firstName: user.displayName?.split(" ")[0] || "First Name",
      lastName: user.displayName?.split(" ")[1] || "Last Name",
    });
  }

  return result;
};
export const SignOut = () => {
  return auth.signOut();
};
