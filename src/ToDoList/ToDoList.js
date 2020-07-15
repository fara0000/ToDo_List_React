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
        const {
            addTask,
        } = this.props;
        const {
            task,
        } = this.state;

        task.trim() && addTask(task);

        this.setState({ task: '' })
    }

    render() {
        const { changeToDoItem } = this;
        const {
            task,
            isShowToDoItem,
        } = this.state;

        const {
            delTask,
            getTasks,
            doneTask,
        } = this.props;

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
                                    value={task}
                                    onChange={e => this.handleInput(e)}
                                    placeholder={'Enter a task, please...'}
                                />
                                <ToDoButton onClick={() => changeToDoItem()}/>
                            </InputWrapper>
                            <TaskWrapper>
                                { getTasks.map((task, index) =>
                                    <ToDoItem
                                        del={delTask}
                                        key={index}
                                        text={task}
                                        doneTask={doneTask}
                                    />)
                                }
                            </TaskWrapper>
                        </Container.MainWrapper>
                    </Container>
                }
            </>
        )
    }
}

export default ToDoList;