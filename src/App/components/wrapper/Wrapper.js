import React, { PureComponent } from 'react';
import { Container } from './styleComponent';
import { InputWrapper } from './styleComponent';
import { TaskWrapper } from './styleComponent';
import ToDoButton from '../button/Button';
import ToDoInput from '../input/Input';
import ToDoItem from '../TodoListItem/TodoListItem';

class ToDoContainer extends React.PureComponent {
    constructor (props) {
        super (props)
    }
    
    render () { 
        return (
            <Container>
                <Container.TitleDiv>
                    <h1>To Do List</h1>
                </Container.TitleDiv>
                <Container.MainWrapper>
                    <InputWrapper>
                        <ToDoInput />
                        <ToDoButton />
                    </InputWrapper>
                    <TaskWrapper>
                        <ToDoItem />
                    </TaskWrapper>
                </Container.MainWrapper>
            </Container>
        )
    }
}

export default ToDoContainer;