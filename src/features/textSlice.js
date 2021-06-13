import { createSlice } from '@reduxjs/toolkit';

export const textSlice = createSlice({

    name: "text",
    initialState: {
        textString: "",
    },
    reducers: {
        setTextstring : (state, action) => {
            state.textString = action.payload;
        }
    },
});

export const { setTextstring } = textSlice.actions;

export const selectTextString =  state => state.text.textString;

export default textSlice.reducer;