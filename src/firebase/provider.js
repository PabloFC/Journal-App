import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithRedirect(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(res);
    // console.log({ credentials });
    const { displayName, email, photoURL, uid } = result.user;
    // console.log({ user });
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (err) {
    const errorMessage = err.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    // console.log(resp);

    //actualizar el displayName(usuario) en firebase
    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};
