import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { loadCourses } from '../actions/actionCreators';
import CourseForm from './CourseForm';

class AddCourseContainer extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        //todo get authors
    }

    render() {   
        
        return (
            <div className="container">
                <CourseForm newCourse={this.props.newCourse} />
            </div>
        );
    }
}


// AddCourse.propTypes = {
//     courses: PropTypes.array.isRequired,
//     actions: PropTypes.object.isRequired
// };

function mapStateToProps(state) {
   
    // let newCourse = { title: '', authorId: 0, length: '', category: '' };

    return {
        newCourse: state.newCourse,
        courses: state.courses
    };
}

export default connect(mapStateToProps)(AddCourseContainer);
