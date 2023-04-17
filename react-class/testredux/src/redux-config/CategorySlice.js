import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk("fetchCategory",async()=>{
    let response = await axios.get("https://dummyjson.com/products/categories");
    return response.data;
});
const slice = createSlice({
    name: "categgory",
    initialState:{
        categoryList : [],
        error : null,
        isLoading: false
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCategory.pending,(state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchCategory.fulfilled,(state,action)=>{
            state.categoryList = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchCategory.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = "Oops! something went wrong...";
        })
    }
});

export default slice.reducer;