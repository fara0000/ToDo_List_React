import React,{ memo } from 'react'
import { TextInput } from './styleComponent';

const ToDoInput = (props) => {
    return  (
        <TextInput
            value={props.value}
            onChange={e => props.onChange(e)}
        />
    )
}

export default memo(ToDoInput);