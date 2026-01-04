import { configureStore } from "@reduxjs/toolkit";
import instSlice from "./reducers/instConfig"

const store = configureStore({
    reducer: {
        inst: instSlice
    }
})

export default store