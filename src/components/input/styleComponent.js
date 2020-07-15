import styled from 'styled-components';

const inputWidth = 260;
const inputHeight = 35;

export const TextInput = styled.input`
    type: text;
    width: ${inputWidth}px;
    height: ${inputHeight}px;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    border: none;
    border-radius: 15px;
    background-color: #e6e6e6;
    padding: 10px 10px 10px 10px;
    margin: 10px 5px 10px 25px;
    outline: none;
    :focus {
        border: 1px solid #fb4c49;
        box-shadow: 0 0 3px #fb4c49;
    }
`;