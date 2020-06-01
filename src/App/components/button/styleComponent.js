import styled from 'styled-components';

export const Submit = styled.button `
    background-color: #3737fd;
    border: none;
    border-radius: 50%;
    text-align: center;
    text-decoration: none;
    outline: none;
    cursor: pointer
    box-sizing: border-box;
    margin: auto 15px;
`;

Submit.button = styled.div `
    width: 50px;
    color: white;
    font-size: 50px;
    padding-bottom: 7px;
    transition:  transform 2s;

        :hover {
            transform: rotateZ(45deg); 
        }
`;