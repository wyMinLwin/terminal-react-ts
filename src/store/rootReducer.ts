import { combineReducers } from "@reduxjs/toolkit";
import { commandHistorySlice } from "./commandHistorySlice";
import { userPrefrenceSlice } from "./userPrefrenceSlice";

export const rootReducer = combineReducers({
    userPrefrence: userPrefrenceSlice.reducer,
    commandHistory: commandHistorySlice.reducer,
})