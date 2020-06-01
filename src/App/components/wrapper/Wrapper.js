import React, { memo } from 'react';
import { Container } from './styleComponent';
import { InputWrapper } from './styleComponent';
import { TaskWrapper } from './styleComponent'

const ToDoContainer = props => {
    return (
        <Container>
            <Container.TitleDiv>
                <h1>To Do List</h1>
            </Container.TitleDiv>
            <Container.MainWrapper>
                <InputWrapper>
                </InputWrapper>
                <TaskWrapper>
                </TaskWrapper>
            </Container.MainWrapper>
        </Container>
    )
}

export default memo(ToDoContainer);