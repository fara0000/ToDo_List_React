import React from 'react';
import { Wrapper } from './styleComponent';

const TodoItem = (props) => {
    return ( 
       <Wrapper>
           <Wrapper.text>
               {props.content} здесь будет задачка
           </Wrapper.text>
           <Wrapper.button>
               x
           </Wrapper.button>
       </Wrapper>
    ); 
}

export default TodoItem;