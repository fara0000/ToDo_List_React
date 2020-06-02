import * as constants from '../constants/constants';

export const addTask = payload => ({
    type: constants.CREATE_TASK,
    payload,
});