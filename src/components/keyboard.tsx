import { DividerIcon } from "../assets/icon/divider";
import { MaxIcon } from "../assets/icon/max";
import { MinIcon } from "../assets/icon/min";
import { MultiplyIcon } from "../assets/icon/multiply";
import { ResultIcon } from "../assets/icon/result";
import { Keyboard_Style } from "../style/keyboard";

import { getValues, operation, result, clearDisplay } from "../redux/features/keyboardSlice";

import { useDispatch } from "react-redux";

export const Keyboard = () => {
    const dispatch = useDispatch()

    const getButtonValue = (value:number) => {
        dispatch(getValues(value))
    }

    const operationState = (operationState: string) => {
        dispatch(operation(operationState))
    }

    return (
        <Keyboard_Style>
            <div className="container-keyboard">
                <div className="keyboard-number">
                    <button onClick={() => getButtonValue(7)}>7</button>
                    <button onClick={() => getButtonValue(8)}>8</button>
                    <button onClick={() => getButtonValue(9)}>9</button>
                    <button onClick={() => getButtonValue(4)}>4</button>
                    <button onClick={() => getButtonValue(5)}>5</button>
                    <button onClick={() => getButtonValue(6)}>6</button>
                    <button onClick={() => getButtonValue(1)}>1</button>
                    <button onClick={() => getButtonValue(2)}>2</button>
                    <button onClick={() => getButtonValue(3)}>3</button>
                    <button onClick={() => getButtonValue(0)}>0</button>
                    <button>.</button>
                    <button id="btn-del" onClick={() => dispatch(clearDisplay())}>del</button>
                </div>
                <div className="keyboard-operations">
                    <div className="container-operators">
                        <button onClick={() => operationState("divider")}>
                            <DividerIcon/>
                        </button>
                        <button onClick={() => operationState("multiply")}>
                            <MultiplyIcon/>
                        </button>
                        <button onClick={() => operationState("min")}>
                            <MinIcon/>
                        </button>
                        <button onClick={() => operationState("max")}>
                            <MaxIcon/>
                        </button>
                    </div>
                    <button id="result-button" onClick={() => dispatch(result())}>
                        <ResultIcon/>
                    </button>
                </div>
            </div>
        </Keyboard_Style>
    );
};