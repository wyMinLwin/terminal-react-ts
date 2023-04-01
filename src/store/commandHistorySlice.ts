import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CommandHistoryType = {
    command: string;
    result: string
}

const initialState: CommandHistoryType[] = []

export const commandHistorySlice = createSlice({
    name:'commandHistory',
    initialState,
    reducers:{
        addToHistory: (state,action: PayloadAction<CommandHistoryType>) => {
            
            if (action.payload.command.search('suii -clear') === 0) return state = [...state]
            return state = [...state,action.payload]
        },
        clearHistory: (state) => {
            return state = []
        }
    }
})