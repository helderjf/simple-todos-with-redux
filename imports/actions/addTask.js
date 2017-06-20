import { Meteor } from 'meteor/meteor';

export default addTask = (taskTitle) => {

    Meteor.call('tasks.insert', taskTitle);
    console.log('New task added');

    return {
        type: 'ADD_TASK',
        payload: {
            taskTitle
        }
    }
}