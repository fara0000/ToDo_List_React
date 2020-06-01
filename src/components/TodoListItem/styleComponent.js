import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 400px;
    height: auto;
    background-color: rgb(66, 135, 245);
`;

Wrapper.button = styled.button`
    margin:10px;
    width: 30px;
    height: 30px;
    color: white;
    border: none;
    background:rgb(66, 69, 245);
    transition: 0.5s;
 
  &:hover {
    transform: scale(1.2);
    background-color: darkblue;
  }
`;

Wrapper.text = styled.div`
    widht: 300px;
    height: auto;
    color: white;
    margin: 10px;
`;