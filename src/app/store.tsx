import { configureStore } from "@reduxjs/toolkit";

//slices
import userReducer from "../features/name/nameSlice";
import phoneReducer from '../features/phone/phoneSlice';
import emailReducer from '../features/email/emailSlice';

const store = configureStore({
    reducer : {
        user : userReducer,
        email : emailReducer,
        phone : phoneReducer
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;