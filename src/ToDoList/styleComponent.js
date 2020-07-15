import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
`;

Container.MainWrapper = styled.div`
    & {
        position: relative;
        height: 500px;    
        width: 400px;
        // border: 2px solid #fb4c49;
        // border-bottom-style: none;
        // box-shadow: 0 0 10px #fb4c49;
        background-color: white;
    }
    &:before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        z-index: -1;
    }
    &:after {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        z-index: -2;
        filter: blur(70px);
    }
    &:before, &:after {
        background: linear-gradient(235deg,#fb4c49,#171330,#00bcd4);
    }
`;

Container.TitleDiv = styled.div`
    height: 70px;
    width: 400px;
    color: white;
    font-family: 'Roboto', sans-serif;
`;

export const InputWrapper = styled.div`
    height: 100px;
    width: 400px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TaskWrapper = styled.div`
    height: 400px;
    width: 400px;
    background-color: #171330;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: scroll;
`;