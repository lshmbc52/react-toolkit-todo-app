import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";

export const store = configureStore({
    reducer:{
        todos:todoReducer
    }
})







// action dispatch => reducer =>store => react

// store redux toolkit

// slice => sub reducer => reducer => configureStore => store object

// store object

// 모든 컴포넌트 redux store state useCallback, update

// Provider store wrap