import React, { memo } from 'react'
import { Submit } from './StyleComponent';


const Button = props => {
    return (
        <Submit>  
            <Submit.button>
                +
            </Submit.button>
        </Submit>
    )
}

export default memo(Button);