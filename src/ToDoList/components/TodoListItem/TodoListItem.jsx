import React from 'react';
import { Wrapper } from './styleComponent';

const ToDoItem = props => {
    const {
        id,
        text,
        done,
    } = props.text;

    const {
        del,
        doneTask,
    } = props;
    
    return (
        <Wrapper
            data-at={'wrapper-to-do-list-items'}
            done={done}
            onClick={() => doneTask(id)}
        >
            <Wrapper.text>
                {text}
            </Wrapper.text>
            <Wrapper.button
                onClick={() => del(id)}
            >
                ×
            </Wrapper.button>
        </Wrapper>
    )
};

export default ToDoItem;