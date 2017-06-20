import React, { Component, PropTypes } from 'react';
import Meteor from 'meteor/meteor';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import addTask from '../actions/addTask.js';


class NewTaskForm extends Component {

    handleSubmit(event) {
        event.preventDefault();
        
        const textInput = this.refs.textInput;
        const text = textInput.value.trim();

        this.props.addTask(text);
            //clear form
            textInput.value = '';

    }


    render() {
        return (
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                <input
                    name="textInput"
                    type="text"
                    ref="textInput"
                    placeholder="Type to add new tasks"
                />
            </form>
        );
    }

}

function mapStateToProps(state){
    return {

    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        addTask:addTask
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(NewTaskForm);




