import ToDoList from './ToDoList';
import { connect } from 'react-redux';
import * as action from './action';
import * as selectors from './selector';

const mapDispatchToProps = dispatch => ({
    createTask: payload => dispatch(action.addTask(payload))
});

const mapStateToProps = state => ({
    getTasks: selectors.getTasks(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);