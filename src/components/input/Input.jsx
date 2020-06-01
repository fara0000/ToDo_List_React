import React, {memo} from 'react'
import textInput from './styleComponent';

function Input (props) {
    return (
        <textInput {...props}>
        </textInput>
    )
}

export default memo(Input);