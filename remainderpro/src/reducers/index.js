import { ADD_REMAINDER } from '../constants';

const reminder = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}

const reminders = (state = [], action) => {
    let reminders = null;
    switch (action.payload) {
        case ADD_REMAINDER:
            reminders = [...state, reminder(action)];
            console.log('reminders state', reminders);
            return reminders;
        default:
            return state;
    }
};

export default reminders;