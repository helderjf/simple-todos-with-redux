import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import Task from './Task.jsx';

class TaskList extends Component {

    render() {
        return (
            <ul>
                {this.renderTasks()}
            </ul>

        );
    }



    renderTasks() {
        let filter = this.props.filter;
        let tasks = this.props.tasks;
        if (filter) {
            tasks = tasks.filter(task => !task.checked);
        }



        if (!tasks) {
            return (<li>No Tasks</li>);
        }
        return tasks.map((task) => {
            const currentUserId = this.props.currentUser && this.props.currentUser._id;
            const showPrivateButton = task.owner === currentUserId;

            return (
                <Task
                    key={task._id}
                    task={task}
                    showPrivateButton={showPrivateButton}
                />
            );
        });
    }


}



TaskList.propTypes = {
    tasks: PropTypes.array,
    filter: PropTypes.bool.isRequired,
    currentUser: PropTypes.object,
};



function mapStateToProps(state){
    return {
        filter: state.hideCompleted
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({toggleVisibility:toggleVisibility}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TaskList);