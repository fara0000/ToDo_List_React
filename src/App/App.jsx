import React from 'react';
import { GlobalStyle } from './styleComponent';
import ToDoContainer from '../ToDoList/ToDoList';

function App() {
    return (
        <>
            <ToDoContainer />
            <GlobalStyle />
        </>
    )
}

export default App;