import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
  addNewEmptyNote,
  setActiveNote,
  savingNewNote,
  setNotes,
} from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
      imageUrls: [],
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    const setDocResp = await setDoc(newDoc, newNote);
    console.log({ newDoc, setDocResp });

    newNote.id = newDoc.id;

    //dispatch
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    console.log({ uid });
    if (!uid) throw new Error("El UID del usuario no existe");
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};
