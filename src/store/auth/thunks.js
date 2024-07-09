import { signInWithGoogle } from "../../firebase/provider";
import { checkingCredentials } from "./authSlice";

export const checkingAuththentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    console.log({ result });
  };
};
