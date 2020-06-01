import React, { memo } from 'react';
import { Container } from './styleComponent';
import { InputWrapper } from './styleComponent';
import { TaskWrapper } from './styleComponent';
import ToDoButton from '../button/Button';
import ToDoInput from '../input/Input';
import ToDoItem from '../TodoListItem/TodoListItem';

const ToDoContainer = props => {
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

export default memo(ToDoContainer);