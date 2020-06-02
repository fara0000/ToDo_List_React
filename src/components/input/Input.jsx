import React,{ memo } from 'react'
import { TextInput } from './styleComponent';

const ToDoInput = (props) => {
    return  (
        <TextInput {...props}/>
    )
}

export default memo(ToDoInput);