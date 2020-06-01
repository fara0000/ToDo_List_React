import React from 'react';
import { Wrapper } from './styleComponent';

const ToDoItem = (props) => {
    return ( 
        <Wrapper>
            <Wrapper.text>
                {props.content} Tasks
            </Wrapper.text>
            <Wrapper.button>
                ×
            </Wrapper.button>
        </Wrapper>
    ); 
}

export default ToDoItem;