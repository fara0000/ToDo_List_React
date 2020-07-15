import * as constants from '../constants/constants';
let id = 0;

export const addTask = payload => ({
    type: constants.CREATE_TASK,
    payload,
    id: ++id
});

export const delTask = id => ({
    type: constants.DELETE_TASK,
    id,
});

export const doneTask = id => ({
    type: constants.DONE_TASK,
    id,
});