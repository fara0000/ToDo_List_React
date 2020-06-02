import * as constants from '../constants/constants';

const initialState = [];

export default (state = initialState, action ) => {
    switch(action.type) {
        case constants.CREATE_TASK:
            return [
                ...state,
                { text: action.payload, done: false }
            ]
        case constants.DELETE_TASK:
            return state.filter(item => item.text !== action.payload)
        case constants.DONE_TASK:
            return state.map(todo =>
                action.payload === todo.text
                    ? { text: todo.text, done: !todo.done }
                    : todo
            )
        default:
            return state;
    }
};