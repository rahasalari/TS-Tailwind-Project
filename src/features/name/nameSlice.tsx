import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initial {
    nameValue : string
}

const initialState = {
    nameValue : '',
}

export const nameSlice = createSlice({
    name:'user',
    initialState,
    reducers : {
        setName : (state, action: PayloadAction<string>) => {
            state.nameValue = action.payload;
        }
    }
});

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;