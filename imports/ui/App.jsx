import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';
import VisibilityFilter from './VisibilityFilter.jsx';
import TaskList from './TaskList.jsx';
import Title from './Title.jsx';
import NewTaskForm from './NewTaskForm.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false,
    };
  }


  render() {

    return (
      <div className="container">
        <header>
          <AccountsUIWrapper />
          <br />
          <Title title="Todo List" incompleteCount={this.props.incompleteCount} />
          <VisibilityFilter />

          {this.props.currentUser ?
            <NewTaskForm ref="formulario" /> : ''
          }
        </header>
        <TaskList tasks={this.props.tasks} currentUser={this.props.currentUser} />
      </div>
    );
  }
}


App.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  Meteor.subscribe('tasks');

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true, } }).count(),
    currentUser: Meteor.user(),
  };
}, App);
