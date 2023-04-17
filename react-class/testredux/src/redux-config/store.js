import { configureStore } from "@reduxjs/toolkit";
import MasterReducer from './MasterSlice';
import AddressSlice from './AddressSlice';
import CategoryReducer from './CategorySlice';
console.log(MasterReducer);

const store = configureStore({
    reducer:{
        data: MasterReducer,
        address: AddressSlice,
        category: CategoryReducer
    }
});
export default store;