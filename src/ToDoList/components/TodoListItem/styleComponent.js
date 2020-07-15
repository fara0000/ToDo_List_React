import styled from 'styled-components';

const wrapperBgDone = '#89ff00';
const wrapperBg = '#fb4c49';
const boxShadowDone = '0 0 5px #89ff00';
const boxShadow = '0 0 5px #fb4c49';
const whiteC = '#ffffff';
const blackC = '#000000';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 380px;
    height: 100px;
    font-family: 'Roboto', sans-serif;
    background-color: ${ props => props.done ? wrapperBgDone : wrapperBg };
    box-shadow: ${ props => props.done ? boxShadowDone : boxShadow };
    color: ${ props => props.done ? blackC : whiteC };
    margin-top: 15px;
`;

Wrapper.button = styled.button`
    color: ${ props => props.done ? blackC : whiteC };
    height: 40px;
    border: none;
    margin: 0 5px;
    background: none;
    font-size: 35px;
    transition: 0.5s;
    outline: none;
    cursor: pointer;

  &:hover {
    transform: scale(1.2);
    outline: none;
    color: red;
  }
`;

Wrapper.text = styled.div`
    height: auto;
    margin: 10px;
    padding: 5px 10px;
`;