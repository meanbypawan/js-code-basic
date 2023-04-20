import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import CategorySlice from "./CategorySlice";
import RecentProductSlice from "./RecentProductSlice";
import UserSlice from "./UserSlice";
const store = configureStore({
    reducer:{
        category: CategorySlice,
        recentProduct: RecentProductSlice,
        user: UserSlice,
        cart: CartSlice
    }
});

export default store;