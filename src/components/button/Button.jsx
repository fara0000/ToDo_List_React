import React, { memo } from 'react'
import { Submit } from './styleComponent';

const ToDoButton = props => {
    return (
        <Submit
            onClick={() => props.onClick()}
        >
            +
        </Submit>
    )
}

export default memo(ToDoButton);