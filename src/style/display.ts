import styled from "styled-components";

export const Display_Style = styled.div `
    padding-right: 45px;
    width: calc(100% - 45px);
    height: 163px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    color: white;
    font-size: 40px;
    font-weight: 700;

    #after {
        font-size: 20px;
        color: #383838;
    }
`;