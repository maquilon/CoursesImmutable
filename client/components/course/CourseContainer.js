import React, { Component } from 'react';
import { connect } from 'react-redux';
import CourseForm from './CourseForm';
import CourseActions from '../../actions/actionCreators';

class CourseContainer extends Component {
    constructor(props, context) {
        super(props, context);
    }

 

    render() {
        return (
            <div>
                <CourseForm  />
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        // courses: state.courses,
        // authors: state.authors
    };
}

export default connect(mapStateToProps)(CourseContainer);