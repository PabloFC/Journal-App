import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
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
