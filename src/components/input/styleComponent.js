import styled from 'styled-components';

const inputWidth = 250;
const inputHeight = 20;

export const TextInput = styled.input`
    type: text;
    width: ${inputWidth}px;
    height: ${inputHeight}px;
    font-family: "Roboto", sans-serif;
    border: 2px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    outline: none;
    :active {
        border: 2px solid black;
    }
`;