import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: true,
    messageSaved: "",
    notes: [],
    active: null,
    // activeNote: {
    //   id: '123',
    //   title: '',
    //   body: '',
    //   date: 1234,
    //   imageUrls: [],
    // }
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
      //  state.notes.push(action.payload);
      //  state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      // state.active = action.payload
      // state.messageSaved = ""
    },

    setNotes: (state, action) => {
      //   state.notes = action.payload;
    },
    setSaving: (state) => {
      //   state.isSaving = true;
    },
    updateNote: (state, action) => {
      //   state.isSaving = false;
      //   state.notes = state.notes.map((note) => {
      //     if (note.id === action.payload.id) {
      //       return action.payload;
      //     }
      //     return note;
      //   });
      //   state.messageSaved = `${action.payload.title}, actualizado correctamente`;
    },
    deleteNotebyId: (state, action) => {
      //   state.active = null;
      //   state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNotebyId,
} = journalSlice.actions;
