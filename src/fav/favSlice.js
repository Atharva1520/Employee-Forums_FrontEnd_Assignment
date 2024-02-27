import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    favs: []
  };

export const favSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        addFav: (state, action) => {
            const fav = {
                id: nanoid(),
                text: action.payload.text
              };
              state.favs.push(fav);
        },
        removeFav: (state, action) => {
            state.favs = state.favs.filter((fav) => fav.id !== action.payload)
        },
    }
});

export const { addFav, removeFav } = favSlice.actions;

export default favSlice.reducer;
