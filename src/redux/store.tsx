import { configureStore } from "@reduxjs/toolkit";
import keyboardReducer from "./features/keyboardSlice"

export default configureStore({
    reducer: {
        keyboard: keyboardReducer,
    }
})