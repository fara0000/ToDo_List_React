import React, { PureComponent } from 'react';
import { Container } from './styleComponent';
import { InputWrapper } from './styleComponent';
import { TaskWrapper } from './styleComponent';
import ToDoButton from '../components/button/Button';
import ToDoInput from '../components/input/Input';
import ToDoItem from './components/TodoListItem/TodoListItem';

class ToDoList extends PureComponent {
    constructor (props) {
        super (props);

        this.state = {
            task : '',
            isShowToDoItem: false,
        }
    }

    handleInput = event => {
        const { value } = event.target;

        this.setState({task: value});
    }

    changeToDoItem = () => {
        const { createTask } = this.props;
        const { task } = this.state;

        createTask(task);
        this.setState({ task: '' })
    }

    render() {
        const { changeToDoItem } = this;
        const {
            isShowToDoItem,
        } = this.state;

        return (
            <>
                {isShowToDoItem ? <ToDoItem/> :
                    <Container>
                        <Container.TitleDiv>
                            <h1>To Do List</h1>
                        </Container.TitleDiv>
                        <Container.MainWrapper>
                            <InputWrapper>
                                <ToDoInput
                                    type={'text'}
                                    onChange={e => this.handleInput(e)}
                                    placeholder={'Enter a task, please...'}
                                />
                                <ToDoButton onClick={() => changeToDoItem(!isShowToDoItem)}/>
                            </InputWrapper>
                            <TaskWrapper>
                                <ToDoItem/>
                            </TaskWrapper>
                        </Container.MainWrapper>
                    </Container>
                }
            </>
        )
    }
}

export default ToDoList;