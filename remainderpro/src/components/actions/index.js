import { ADD_REMAINDER } from '../constants';

export const addRemainder = (text) => {
    const action = {
        type: ADD_REMAINDER,
        text
    };
    console.log('Action in addRemainder', action);
    return action;
};