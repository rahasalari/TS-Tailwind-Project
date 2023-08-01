import {createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initial {
    emailValue : string
}

const initialState : initial = {
    emailValue : ''
};

export const emailSlice = createSlice({
    name:'email',
    initialState,
    reducers : {
        setEmail : (state, action: PayloadAction<string>) => {
            state.emailValue = action.payload;
        }
    }
});

export const { setEmail } = emailSlice.actions;
export default emailSlice.reducer;