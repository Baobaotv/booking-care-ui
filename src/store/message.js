import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messageData: [],
};

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.messageData = action.payload;
        },
    },
});

export const { setMessage } = messageSlice.actions;
export const messageReducer = messageSlice.reducer;
