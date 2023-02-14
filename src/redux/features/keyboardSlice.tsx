import { createSlice } from "@reduxjs/toolkit";

interface KeyboardProps {
    keyboard: {
        valueOne: number;
        operation: string;

    }
}
export const slice = createSlice({
    name: "keyboard",
    initialState: {
        valueOne: 0,
        operation: "none",
        valueTwo: 0,
        result: 0,
    },

    reducers: {
        getValues(state, {payload}) {
            if(state.operation == "none") {
                return { ...state, valueOne: payload }
            }
            
        },

        operation(state) {

        },
    }
});

export const { getValues, operation } = slice.actions
export const valueOne = (state:KeyboardProps) => state.keyboard.valueOne
export default slice.reducer