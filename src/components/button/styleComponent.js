import styled from 'styled-components';

export const Submit = styled.button `
background-color: blue;
border: none;
border-radius: 50%;
text-align: center;
text-decoration: none;
outline: none;
cursor: pointer
box-sizing: border-box;
`;

Submit.button = styled.div `
    width: 50px;
    height: 50px;
    color: white;
    font-size: 50px;
    padding-bottom: 7px;
    transition:  transform 2s;
        :hover {
            color: red;
            transform: rotateX(360deg); 
        }
`;
