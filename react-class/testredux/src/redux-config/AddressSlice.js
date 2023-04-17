import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "address",
    initialState:{
        headOfficeAddress: "Rajmohalla, Indore (MP)"
    }
});

export default slice.reducer;

