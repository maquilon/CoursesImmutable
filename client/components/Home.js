import React, { Component } from 'react';
import { connect } from 'react-redux';
import CourseActions from '../actions/actionCreators';
import CourseList from './course/CourseList';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import Loader from 'react-loader';

class Home extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.dispatch(CourseActions.loadCoursesAsync());
    }

    render() {
        const {courses} = this.props;
        const {authors} = this.props;

        var options = {
            lines: 13,
            length: 20,
            width: 10,
            radius: 30,
            scale: .50,
            corners: 1,
            color: '#008CBA',
            opacity: 0.25,
            rotate: 0,
            direction: 1,
            speed: 1,
            trail: 60,
            fps: 20,
            zIndex: 2e9,
            top: '50%',
            left: '50%',
            shadow: false,
            hwaccel: false,
            position: 'absolute'
        };

        let showLoader = (this.props.courses.get('loaded') ?
            (
                <div>
                    <CourseList courses={courses} authors={authors} />
                </div>
            )
            :
            (
                <div>
                    <Loader loaded={false} options={options} className="spinner" />
                    <div style={{ fontSize: '12px' }}>Loading...</div>
                </div>
            )
        );
        
        return (
            <div>
                {showLoader}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses,
        authors: state.authors
    };
}

export default connect(mapStateToProps)(Home);