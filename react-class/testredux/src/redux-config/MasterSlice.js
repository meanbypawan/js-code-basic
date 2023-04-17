import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'data',
    initialState:{
        value: "InfoBeans Foundation"
    },
    reducers:{
        changeValue: (state,action)=>{ // action: {type:'data/changeValue', payload : ''}
          state.value = action.payload;
        }
    }
});
export const {changeValue} = slice.actions;
export default slice.reducer;