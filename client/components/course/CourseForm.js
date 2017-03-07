import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import CourseActions from '../../actions/actionCreators';

class CourseForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            saving: false
        };
    }

    saveCourse() {  
        if ( !this.courseFormIsValid() ) { return; }     
        this.setState({ saving: true });
        this.props.dispatch(CourseActions.addCourseAsync(this.props.course));
        this.props.dispatch(CourseActions.resetCourseToAdd(this.props.course));
        this.props.disabled(CourseActions.resetCourseValidation(this.props.error));        
        browserHistory.push('/');
    }

    courseFormIsValid() {
        let formIsValid = true;  

        if (this.props.course.get('title').length < 5) {
            this.props.dispatch(CourseActions.validateCourse('title', 'Title must be at least 5 characters'));
            formIsValid = false;
        }
        if (this.props.course.get('category').length < 2) {
            this.props.dispatch(CourseActions.validateCourse('category', 'Please enter category information'));
            formIsValid = false;
        }
        if (this.props.course.get('length').length < 2) {
            this.props.dispatch(CourseActions.validateCourse('length', 'Please enter length of the vide information'));
            formIsValid = false;
        }        


        return formIsValid;
    }

    render() {
        return (
            <div className="well bs-component col-md-12">
                <form >
                    <fieldset>
                        <legend>NEW COURSE</legend>
                        
                        <TextInput
                            name="title"
                            label="TITLE"
                            onChange={(e) => this.props.dispatch(CourseActions.updateNewCourse('title', e.target.value))}
                            placeholder="course"
                            value={ this.props.course.get('title') } 
                            error={ (this.props.course.get('title').length < 5) ? this.props.error.get('title') : '' } 
                            />

                        <SelectInput
                            name="authorId"
                            label="AUTHOR"
                            defaultOption="Select Author"
                            options={this.props.authors.get('authorList')}
                            value={this.props.course.get('authorId')} 
                            onChange={(e) => this.props.dispatch(CourseActions.updateNewCourse('authorId', e.target.value))}  />


                        <TextInput
                            name="category"
                            label="CATEGORY"
                            onChange={(e) => this.props.dispatch(CourseActions.updateNewCourse('category', e.target.value))}
                            placeholder="e.g. computer science" 
                            value={this.props.course.get('category')} 
                            error={ (this.props.course.get('category').length != 0) ? this.props.error.get('category') : '' }                             
                            />

                        <TextInput
                            name="length"
                            label="LENGTH"
                            onChange={(e) => this.props.dispatch(CourseActions.updateNewCourse('length', e.target.value))}
                            placeholder="HH:MM" 
                            value={this.props.course.get('length')}
                            error={ (this.props.course.get('length').length != 0) ? this.props.error.get('length') : '' } />

                        <input
                            type="button"
                            disabled={this.saving}
                            value={this.saving ? 'Saving...' : 'Save'}
                            className="btn btn-primary"
                            onClick={() => this.saveCourse()}
                        />
                    </fieldset>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        course: state.courses.get('courseToAdd'),
        error: state.courses.get('error'),
        authors: state.authors
    };
}

export default connect(mapStateToProps)(CourseForm);