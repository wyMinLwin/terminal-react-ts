import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type inintialUserPrefrenceTypes = {
    name:string;
    theme: string;
}

const initialState: inintialUserPrefrenceTypes = {
    name:'User',
    theme:'dark'
}

export const userPrefrenceSlice = createSlice({
    name: 'userPrefrence',
    initialState,
    reducers: {
        setUserName: (state,action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setTheme: (state,action: PayloadAction<string>) => {
            state.theme = action.payload
        }
    }
})

