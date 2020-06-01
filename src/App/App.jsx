import React from 'react';
import { GlobalStyle } from './styleComponent';
import ToDoContainer from './components/wrapper/Wrapper';

function App() {
    return (
        <>
            <ToDoContainer />
            <GlobalStyle />
        </>
    )
}

export default App;