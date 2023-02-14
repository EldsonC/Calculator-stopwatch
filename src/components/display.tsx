import { Display_Style } from "../style/display";
import { valueOne } from "../redux/features/keyboardSlice";
import { useSelector } from "react-redux";

export const Display = () => {
    const valuePrimary = useSelector(valueOne)
    return (
        <Display_Style>
            <span id="after"></span>
            <span id="before">{ valuePrimary }</span>
        </Display_Style>
    );
};