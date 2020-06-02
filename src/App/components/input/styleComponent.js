import styled from 'styled-components';

const inputWidth = 260;
const inputHeight = 35;

export const TextInput = styled.input`
    type: text;
    width: ${inputWidth}px;
    height: ${inputHeight}px;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    border: none;
    border-radius: 15px;
    background-color: #e6e6e6;
    padding: 10px;
    margin: 10px 5px 10px 25px;
    outline: none;
    :focus {
        border: 2px solid #6060db;
    }
`;