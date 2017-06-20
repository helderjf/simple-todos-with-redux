export default deleteTask = (taskID) => {
    Meteor.call('tasks.remove', taskID, function (err) {
        if (err) {
            alert("You can't delete other user's task.");
        }
    });

    console.log('Task ' + taskID + ' deleted');

    return {
        type: 'DELETE_TASK',
        payload: {
            taskID: taskID
        }
    }
}