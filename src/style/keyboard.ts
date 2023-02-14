import styled from "styled-components";

export const Keyboard_Style = styled.div `
    width: 100%;
    height: 219px;

    .container-keyboard {
        padding: 0 45px;
        margin-top: 42px;

        width: calc(100% - 90px);
        height: 100%;

        display: flex;
        justify-content: space-between;

        .keyboard-number {
            width: auto;
            height: 100%;
            display: grid;
            grid-template-columns: 100px 100px 100px;
        }

        .keyboard-operations {
            width: 50%;
            height: 100%;

            display: flex;

            .container-operators {
                display: grid;
                grid-template-columns: 100px;

            }

            #result-button {
                margin-left: 15px;
                width: 84px;
                height: 100%;

                background: #FF513C;

                border-radius: 9px;
                cursor: pointer;
            }
        }
    }

    button {
        background: transparent;
        border: none;
        outline: none;

        color: white;
        font-size: 32px;
        font-weight: 700;

        border-radius: 5px;
    }

    button:hover {
        background: #0F0F0F;
        transition: all.5s;
    }

    #btn-del {
        font-size: 15px;
        text-transform: uppercase;
    }
`;