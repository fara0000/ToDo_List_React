import React from 'react';
import Button from '../components/button/Button';
import { GlobalStyle } from './styleComponent';
import ToDoContainer from './components/wrapper/Wrapper';

function App() {
    return (
        <>
            <Button/>
            <ToDoContainer />
            <GlobalStyle />
        </>
    )
}

export default App;