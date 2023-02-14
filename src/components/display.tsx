import { Display_Style } from "../style/display";
import { valueOne, ValueTwo, operationState, resultValue} from "../redux/features/keyboardSlice";
import { useSelector } from "react-redux";

export const Display = () => {
    const valuePrimary = useSelector(valueOne)
    const ValueSecondary = useSelector(ValueTwo)
    const operationValue = useSelector(operationState)
    const result = useSelector(resultValue)

    return (
        <Display_Style>
            <span id="after">{ valuePrimary != 0 ? valuePrimary : "" } { 
                    operationValue == "divider" ? "/" : "" ||
                    operationValue == "multiply" ? "*" : "" ||
                    operationValue == "min" ? "-" : "" ||
                    operationValue == "max" ? "+" : ""
                } {ValueSecondary != 0 ? ValueSecondary : ""}</span>
            <span id="before">
                { result != 0 ? result : "" }
            </span>
        </Display_Style>
    );
};