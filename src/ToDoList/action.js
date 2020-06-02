import * as constants from '../constants/constants';

export const addTask = payload => ({
    type: constants.CREATE_TASK,
    payload,
});

export const delTask = payload => ({
    type: constants.DELETE_TASK,
    payload,
});

export const doneTask = payload => ({
    type: constants.DONE_TASK,
    payload,
});