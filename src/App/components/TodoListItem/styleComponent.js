import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 380px;
    height: 100px;
    font-family: 'Roboto', sans-serif;
    background-color: rgb(63, 149, 199);
    margin: 15px 0;
`;

Wrapper.button = styled.button`
    color: white;
    height: 40px;
    border: none;
    margin: 0 5px;
    background: none;
    font-size: 35px;
    transition: 0.5s;

  &:hover {
    transform: scale(1.2);
    color: red;
  }
`;

Wrapper.text = styled.div`
    height: auto;
    color: white;
    margin: 10px;
    padding: 5px 10px;
`;