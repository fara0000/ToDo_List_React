import React from 'react';
import { Wrapper } from './styleComponent';

class ToDoItem extends React.Component {
    constructor(props){
        super(props);

    }
    render() {

        return ( 
            <Wrapper>
                <Wrapper.text>
                    Tasks
                </Wrapper.text>
                <Wrapper.button>
                    ×
                </Wrapper.button>
            </Wrapper>
        ); 
    }
}

export default ToDoItem;