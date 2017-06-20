import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import toggleVisibility from '../actions/toggleVisibility.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



class VisibilityFilter extends Component {
  render() {
    return (
      <label className="hide-completed">
        <input
          type="checkbox"
          readOnly
          checked={this.props.checked}
          onClick={()=>this.props.toggleVisibility(!this.props.checked)}
        />
        Hide Completed Tasks
          </label>
    );
  }


}





// VisibilityFilter.PropTypes = {
//   checked: PropTypes.bool.isRequired
// }

function mapStateToProps(state){
    return {
        checked: state.hideCompleted
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({toggleVisibility:toggleVisibility}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(VisibilityFilter);
