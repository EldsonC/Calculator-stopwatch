import { DividerIcon } from "../assets/icon/divider";
import { MaxIcon } from "../assets/icon/max";
import { MinIcon } from "../assets/icon/min";
import { MultiplyIcon } from "../assets/icon/multiply";
import { ResultIcon } from "../assets/icon/result";
import { Keyboard_Style } from "../style/keyboard";

export const Keyboard = () => {
    return (
        <Keyboard_Style>
            <div className="container-keyboard">
                <div className="keyboard-number">
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>0</button>
                    <button>.</button>
                    <button id="btn-del">del</button>
                </div>
                <div className="keyboard-operations">
                    <div className="container-operators">
                        <button>
                            <DividerIcon/>
                        </button>
                        <button>
                            <MultiplyIcon/>
                        </button>
                        <button>
                            <MinIcon/>
                        </button>
                        <button>
                            <MaxIcon/>
                        </button>
                    </div>
                    <button id="result-button">
                        <ResultIcon/>
                    </button>
                </div>
            </div>
        </Keyboard_Style>
    );
};