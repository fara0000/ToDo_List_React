import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
`;

Container.MainWrapper = styled.div`
    height: 500px;    
    width: 400px;
    border: none;
    background-color: white;
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
`;

export const TaskWrapper = styled.div`
    height: 400px;
    width: 400px;
    background-color: #e6e6e6;
`;