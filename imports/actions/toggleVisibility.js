
export default toggleVisibility = (hideCompleted) => {
    console.log('visibility toggled:' + hideCompleted);

    return {
        type: 'VISIBILITY_TOGGLED',
        payload: {
            hideCompleted: hideCompleted
        }
    };
}