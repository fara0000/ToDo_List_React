import styled from 'styled-components';

const inputWidth = 250;
const inputHeight = 35;

export const TextInput = styled.input`
    type: text;
    width: ${inputWidth}px;
    height: ${inputHeight}px;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    border: none;
    background-color: #e6e6e6;
    padding: 10px;
    margin: 10px 0;
    outline: none;
    :focus {
        border: 2px solid #6060db;
    }
`;