import React, { memo } from 'react'
import { Submit } from './styleComponent';

const ToDoButton = props => {
    return (
        <Submit>  
            <Submit.button>
            +
            </Submit.button>
        </Submit>
    )
}

export default memo(ToDoButton);