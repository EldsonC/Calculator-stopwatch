import { createSlice } from "@reduxjs/toolkit";

interface KeyboardProps {
    keyboard: {
        valueOne: number;
        operation: string;
        valueTwo: number;
        result: number;

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
            } else {
                return { ...state, valueTwo: payload }
            }
        },

        operation(state, {payload}) {
            return { ...state, operation: payload }
        },

        clearDisplay(state) {
            return { ...state, valueOne: 0, operation: "none", valueTwo: 0, result: 0 }
        },

        result(state) {
            if(state.operation == "divider") {
                const result = state.valueOne / state.valueTwo
                return { ...state, result: result }
            }

            if(state.operation == "multiply") {
                const result = state.valueOne * state.valueTwo
                return { ...state, result: result }
            }

            if(state.operation == "min") {
                const result = state.valueOne - state.valueTwo
                return { ...state, result: result }
            }

            if(state.operation == "max") {
                const result = state.valueOne + state.valueTwo
                return { ...state, result: result }
            }


        }
    }
});

export const { getValues, operation, result, clearDisplay } = slice.actions
export const valueOne = (state:KeyboardProps) => state.keyboard.valueOne
export const ValueTwo = (state:KeyboardProps) => state.keyboard.valueTwo
export const operationState = (state:KeyboardProps) => state.keyboard.operation
export const resultValue = (state:KeyboardProps) => state.keyboard.result
export default slice.reducer