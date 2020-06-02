import { combineReducers } from 'redux';
import toDoList from '../ToDoList/reducer';


export default combineReducers({
    todo: toDoList,
});