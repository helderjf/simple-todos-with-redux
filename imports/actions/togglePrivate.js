
export default togglePrivate = (taskID, privacy) => {
    Meteor.call(
        'tasks.setPrivate',
        taskID,
        privacy
    );

    console.log('privacy toggled on task: ' + taskID);

    return {
        type: 'PRIVACY_TOGGLED',
        payload: {
            taskID: taskID,
            privacy: privacy
        }
    };
}