import {createSlice } from "@reduxjs/toolkit";
// slice is a part of store
const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:[]
    },
    reducers:{
        //  in  reducer her eis the mutation is happening 
        setUser:(state, action)=>{
            state.user = action.payload;
        },
        logout:(state)=>{
            state.user = []
        }
    }
})
export const { setUser } = authSlice.actions;  // ✅ named export
export default authSlice.reducer;  
 