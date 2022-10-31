const { createSlice } = require("@reduxjs/toolkit");
const initialState={
    cartProducts:[],
    cartCounter:0,
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        add:(state)=>{
            // state.push(action.payload);
            state.cartCounter+=1;
        }
    }
})

export const {add}=cartSlice.actions;
export default cartSlice.reducer;