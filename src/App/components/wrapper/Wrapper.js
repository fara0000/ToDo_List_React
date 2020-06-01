import React, { memo } from 'react';
import { Container } from './styleComponent';
import { InputWrapper } from './styleComponent';
import { TaskWrapper } from './styleComponent';
import ToDoButton from '../button/Button';
import ToDoInput from '../input/Input';
import ToDoItem from '../TodoListItem/TodoListItem';

class ToDoContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isShowToDoItem: false,
        }
    }

    changeToDoItem = isShow => {
        this.setState({ isShowToDoItem: isShow })
    }

    render() {
        const { changeToDoItem } = this;
        const { isShowToDoItem } = this.state;

        return (
            <>
                { isShowToDoItem ? (<ToDoItem/>) :
                <Container>
                    <Container.TitleDiv>
                        <h1>To Do List</h1>
                    </Container.TitleDiv>
                    <Container.MainWrapper>
                        <InputWrapper>
                            <ToDoInput />
                            <ToDoButton onClick={ () => changeToDoItem(!isShowToDoItem)}/>
                        </InputWrapper>
                        <TaskWrapper>
                        </TaskWrapper>
                    </Container.MainWrapper>
                </Container>
                }
            </>
        )
    }
}

export default memo(ToDoContainer);