import { Meteor } from 'meteor/meteor';
// import Tasks from '../api/tasks.js';


export default function (state = { hideCompleted: false }, action) {
    switch (action.type) {
        case 'VISIBILITY_TOGGLED':
            const newState = Object.assign({}, state, { hideCompleted: action.payload.hideCompleted });
            return newState;

        case 'ADD_TASK':
            return state;

        case 'PRIVACY_TOGGLED':
            return state;

        case 'DELETE_TASK':
            return state;

        case 'TOGGLE_COMPLETED':
            return state;

        default:
            return state;
    }
}