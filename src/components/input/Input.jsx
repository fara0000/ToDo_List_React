import React,{ memo } from 'react'
import { TextInput } from '../input/styleComponent';

const Input = (props) => {
    return  (
        <TextInput {...props}/>
    )
}

export default memo(Input);