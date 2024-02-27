import {configureStore} from '@reduxjs/toolkit';
import favReducer from "../fav/favSlice.js"

const store = configureStore({
    reducer: favReducer
})
export default store;