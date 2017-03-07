import axios from 'axios';
import Constants from '../constants/constants';
import {addNotification} from '../actions/notificationActions';

const base = 'http://app.viomedia.com/courses/api';

/* eslint-disable no-console */

class CourseActions {

    static createCourse(course) {
        return {
            type: Constants.CREATE_COURSE,
            course: course
        };
    }

    static deleteCourse(course) {
        return {
            type: Constants.DELETE_COURSE,
            course: course
        };
    }   

    static loadAuthors(authors) {
        return {
            type: Constants.LOAD_AUTHORS,
            authors
        };
    }

    static loadCourses(courses) {
        return {
            type: Constants.LOAD_COURSES,
            courses
        };
    }

    static loadedCourse(bool) {
        return {
            type: Constants.LOADED_COURSES,
            loaded: bool
        };
    }  

    static resetCourseToAdd() {
        return {
            type: Constants.RESET_COURSE,
        };
    }

    static updateCourse(course) {
        return {
            type: Constants.UPDATE_COURSE,
            course
        };
    }

    static updateFormCourseValue(value, key, course) {
        return {
            type: Constants.UPDATE_COURSE_FORM_VALUE,
            value: value,
            key: key,
            course
        };
    }

    static updateCourseValue(value, index) {
        return {
            type: Constants.UPDATE_COURSE_VALUE,
            value: value,
            index: index
        };
    }

    static updateNewCourse(property, value)
    {
        return {
            type: Constants.UPDATE_NEW_COURSE,
            property,
            value
        };
    }

    // ===================================================================== //
    // ===================================================================== //
    // ========================== API: ASYNC CALLS ========================= //
    // ===================================================================== //
    // ===================================================================== //

    static addCourseAsync(course) {      
        return function (dispatch) {
            axios.post(base + '/courses', course)
                .then(function (response) {
                    dispatch(CourseActions.createCourse(course));
                    dispatch(addNotification({title: 'Success', message: 'The course ' + course.get('title') + ' was successfully added.', level: 'success' }));                                    
                    //console.log('success: addCourseAsync ' + course);
                    dispatch(CourseActions.loadCoursesAsync());
                })
                .catch(function (error) {
                    dispatch(addNotification({title: 'Error', message: 'Error in addCourseAsync: ' +  error , level: 'error' }));
                    //console.log('error response ' + error);                                                    
                });
        };
    }

    static deleteCourseAsync(courseId) {
        return function (dispatch) {
            axios.delete(base + `/courses/${courseId}`)
                .then(function (response) {
                    dispatch(CourseActions.deleteCourse(response.data));
                    dispatch(addNotification({title: 'Success', message: 'The course ' + response.data.title + ' was deleted', level: 'success' }));                                                    
                    // console.log('Course deleted successfully ', response.data);                  
                })
                .catch(function (response) {
                    dispatch(addNotification({title: 'Error', message: 'Error deleting course ' +  response , level: 'error', autoDismiss: 0 }));
                    // console.log('Error in deleting course ' + response + ' courseId: ' + courseId);
                });
        };
    }    

    static loadCoursesAsync() {
        return function (dispatch) {            
            axios.get(base + '/courses')
                .then(function (response) {
                    dispatch(CourseActions.loadCourses(response.data));
                    dispatch(CourseActions.loadedCourse(true));
                })
                .catch(function (response) {
                    //console.log('Error in loadCoursesAsync ' + response);
                    dispatch(addNotification({title: 'Error', message: 'Error loading course ' +  response , level: 'error', autoDismiss: 0 }));                    
                });
        };
    }

    static loadAuthorsAsync() {
        return function (dispatch) {            
            axios.get(base + '/authors')
                .then(function (response) {                    
                    dispatch(CourseActions.loadAuthors(response.data));
                })
                .catch(function (response) {
                    // console.log('Error in loading Authors **** ' + response);
                    dispatch(addNotification({title: 'Error', message: 'Error loading Authors ' +  response , level: 'error', autoDismiss: 0 }));                    
                });
        };
    }

    static updateCourseAsync(course) {
        //console.log('course in actionCreators ', `/courses/${course.get('Id')}`);
        return function (dispatch) {
            axios.put(base + '/courses/' + course.get('Id'), course)
            .then(function() {
                // MODIFY API TO RETURN THE UPDATED COURSE - TO DO
                dispatch(CourseActions.loadCoursesAsync());                
                dispatch(addNotification({title: 'Success', message: 'The course ' + course.get('title') + ' was updated', level: 'success' }));
            })
            .catch(function (response) {
                //console.log('Error updating course ' + response);
                dispatch(addNotification({title: 'Error', message: 'Error updating course ' +  response , level: 'error', autoDismiss: 0 }));                     
            });
        };
    }
}

export default CourseActions;