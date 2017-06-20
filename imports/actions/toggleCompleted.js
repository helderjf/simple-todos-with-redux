export default toggleCompleted = (taskID, completed) => {

    Meteor.call(
        'tasks.setChecked',
        taskID,
        completed
    );

    if (completed) {
        console.log('Task ' + taskID + ' completed');
    } else {
        console.log('Task ' + taskID + ' uncompleted');
    }
    return {
        type: 'TOGGLE_COMPLETED',
        payload: {
            taskID: taskID,
            completed: completed
        }
    }
}