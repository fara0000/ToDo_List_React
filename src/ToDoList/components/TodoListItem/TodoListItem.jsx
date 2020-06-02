import React from 'react';
import { Wrapper } from './styleComponent';

const ToDoItem = props => {
    const {
        text,
        done,
    } = props.text;

    const {
        del,
        doneTask,
    } = props;

    return (
        <Wrapper
            done={done}
            onClick={() => doneTask(text)}
        >
            <Wrapper.text>
                {text}
            </Wrapper.text>
            <Wrapper.button
                onClick={() => del(text)}
            >
                ×
            </Wrapper.button>
        </Wrapper>
    )
};

export default ToDoItem;