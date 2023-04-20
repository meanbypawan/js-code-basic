import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndPoint from "../WebApi/api";

export const fetchRecentProduct = createAsyncThunk("recent-product/fetchRecentProduct",async()=>{
   let response = await axios.get(apiEndPoint.RECENT_PRODUCT);
   if(response.data.status)
     return response.data.products;
});
const slice = createSlice({
    name: 'recent-product',
    initialState:{
        recentProductList: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchRecentProduct.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(fetchRecentProduct.fulfilled,(state,action)=>{
            state.recentProductList = action.payload;
            state.isLoading = false;
        }).addCase(fetchRecentProduct.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = "Oops! something went wrong";
        })
    }
});

export default slice.reducer;