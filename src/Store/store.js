import { configureStore } from "@reduxjs/toolkit";
import colors from "./colors";


const store = configureStore({
    reducer:{
        colors:colors 
    }
})

export default store