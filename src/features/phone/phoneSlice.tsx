import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initial {
    phoneValue : string
}

const initialState = {
    phoneValue : '',
};

const phoneSlice = createSlice({
    name:'phone',
    initialState,
    reducers : {
        setPhone : (state, action: PayloadAction<string>) => {
            state.phoneValue = action.payload;
        }
    }
});

export const { setPhone } = phoneSlice.actions;
export default phoneSlice.reducer;