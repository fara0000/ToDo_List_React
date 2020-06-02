import * as constants from '../constants/constants';

const initialState = [
    {
        id: 0,
        task: '',
    }
];

export default (state = initialState, action ) => {
    switch(action.type) {
        case constants.CREATE_TASK:
            return [
                ...state,
                { id: ++id, task: action.payload }
            ]
        defaults:
            return state;
    }
};