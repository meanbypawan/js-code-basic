import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'user',
    initialState:{
        currentUser: null
    },
    reducers:{
        setUser: (state,action)=>{
            state.currentUser = action.payload;
        },
        signOut: (state,action)=>{
            state.currentUser = null;
        }
    }
});

export const {setUser,signOut} = slice.actions;
export default slice.reducer;
