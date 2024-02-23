import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
    userdata:{
        Maincolor: "rgb(21, 128, 61 )",
        MaincolorTailwind: "bg-green-700",
        sidemainTailwind: "bg-green-500",
        TextTailwind: "text-green-500",
        BorderTailwind:"border-green-700",
        HoverTailwind: "hover:bg-green-300"
    }
}

const colors = createSlice({
    name:'colors',
    initialState,
    reducers:{
        changecolor:(state,action)=>{             
            state.userdata=action.payload;
        },
    }
})


export default colors.reducer;
export const {changecolor} = colors.actions;