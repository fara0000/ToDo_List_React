import * as constants from '../constants/constants';

const initialState = [];

export default (state = initialState, action ) => {
    switch(action.type) {
        case constants.CREATE_TASK:
            return [
                ...state,
                { text: action.payload, done: false, id: action.id }
            ]
        case constants.DELETE_TASK:
            return state.filter(todo => todo.id !== action.id)
        case constants.DONE_TASK:
            return state.map(todo =>
                action.id === todo.id
                    ? { text: todo.text, done: !todo.done, id: todo.id}
                    : todo
            )
        default:
            return state;
    }
};