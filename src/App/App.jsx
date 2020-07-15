import React from 'react';
import { GlobalStyle } from './styleComponent';
import ToDoList from '../ToDoList/index';

function App() {
    return (
        <>
            <ToDoList />
            <GlobalStyle />
        </>
    )
}

export default App;