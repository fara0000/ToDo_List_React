import styled from 'styled-components';

export const Submit = styled.button `
    background-color: #fb4c49;
    border: none;
    border-radius: 50%;
    outline: none;
    box-sizing: border-box;
    margin: auto 15px;
    margin: 5px 25px 5px 5px;
    width: 50px;
    height: 50px;
    color: white;
    cursor: pointer;
    font-size: 35px;
    // padding-bottom: 7px;
    transition: transform 0.2s;
    :hover {
        transform: scale(1.1); 
    }
    :active {
        transform: scale(1); 
    }
`;