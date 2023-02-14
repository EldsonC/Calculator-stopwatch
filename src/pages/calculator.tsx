import { Display } from "../components/display";
import { Header } from "../components/header";
import { Keyboard } from "../components/keyboard";
import { CalculatorStyle } from "../style/calculator";

export function Calculator() {
    return (
        <CalculatorStyle>
            <Header/>
            <Display/>
            <Keyboard/>
        </CalculatorStyle>
    );
};