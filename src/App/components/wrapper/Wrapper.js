import React, { PureComponent } from 'react';
import { Container } from './styleComponent';
import { InputWrapper } from './styleComponent';
import { TaskWrapper } from './styleComponent';
import ToDoButton from '../button/Button';
import ToDoInput from '../input/Input';
import ToDoItem from '../TodoListItem/TodoListItem';

class ToDoContainer extends React.PureComponent {
    constructor (props) {
        super (props);

        this.state = {
            isShowToDoItem: false,
            task : ''
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput = event => {
        const { value } = event.target;
        this.setState({task: value});
        console.log(this.state)
    }

    changeToDoItem = isShow => {
        this.setState({ isShowToDoItem: isShow })
    }

    render() {
        const { changeToDoItem } = this;
        const { isShowToDoItem } = this.state;
        const { task } = this.state;

        return (
            <>
                { isShowToDoItem ? (<ToDoItem/>) :
                    <Container>
                        <Container.TitleDiv>
                            <h1>To Do List</h1>
                        </Container.TitleDiv>
                        <Container.MainWrapper>
                            <InputWrapper>
                                <ToDoInput 
                                    placeholder = {'Enter a task, please...'}
                                    className = {'ToDo_Input'}
                                    type = {'text'}
                                    onChange = {e => this.handleInput(e)}
                                />
                                <ToDoButton onClick={ () => changeToDoItem(!isShowToDoItem)}/>
                            </InputWrapper>
                            <TaskWrapper>
                                <ToDoItem />
                            </TaskWrapper>
                        </Container.MainWrapper>
                    </Container>
                }
            </>
        )
    }
}

export default ToDoContainer;