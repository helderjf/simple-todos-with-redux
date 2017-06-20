import React, {Component, PropTypes} from 'react';


export default class Title extends Component {
    render(){
        return(
            <h1>{this.props.title} ({this.props.incompleteCount})</h1>
        );
    }
}


Title.PropTypes ={
     title: PropTypes.string.isRequired,
     incompleteCount: PropTypes.number.isRequired
}