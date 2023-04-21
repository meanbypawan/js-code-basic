import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndPoint from '../WebApi/api';
export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId)=>{
   let response = await axios.post(apiEndPoint.FETCH_CART,{userId});
   return response.data[0].cartItems;
});

export const addItemInToCart  = createAsyncThunk("cart/addItemInToCart",async(obj)=>{
  let response = await axios.post(apiEndPoint.ADD_TO_CART,{userId: obj.userId, productId: obj.productId});
  if(response.data.status)
    return response.data;
});
const slice = createSlice({
    name: 'cart',
    initialState:{
        cartItems: [],
        cartError: null,
        flag: false
    },
    reducers:{
        updateCartItems: (state,action)=>{
          state.cartItems = [...state.cartItems,{productId:action.payload}]; 
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCart.fulfilled,(state,action)=>{
            state.cartItems = action.payload;
        }).addCase(fetchCart.rejected,(state)=>{
            state.cartError = "Oops! somehting went wrong..";
        }).addCase(addItemInToCart.fulfilled,(state,action)=>{
            state.flag = true;
        }).addCase(addItemInToCart.rejected,(state)=>{
            state.cartError = 'Oops! something went wrong';
        });
    }
});
export const {updateCartItems} = slice.actions;
export default slice.reducer;