import Immutable from 'immutable';
import constants from '../constants/constants';
import courseInitialState from '../initialState/courseInitialState';
import _ from 'lodash';

/* eslint-disable no-console */

function coursesReducer(state = courseInitialState.courses, action) {
    switch (action.type) {

        case constants.CREATE_COURSE:     
            state = state.set('coursesList', state.get('coursesList').push(Immutable.fromJS(action.course)));  
            return state;       

        case constants.DELETE_COURSE:
            let stateJS = state.toJS();
            let courseIndex = _.findLastIndex(stateJS.coursesList, { Id: action.course.Id });
            return state.deleteIn(['coursesList', courseIndex]);

        case constants.LOAD_COURSES:
            state = state.updateIn(['coursesList'], (data) => data = Immutable.fromJS(action.courses));
            return state;

        case constants.LOADED_COURSES:
            state = state.set('loaded', action.loaded);
            return state;

        case constants.RESET_COURSE:
            state = state.set('courseToAdd', courseInitialState.courses.get('courseToAdd'));            
            return state;              

        case constants.UPDATE_COURSE_VALUE:           
            state = state.updateIn(['course', action.index, 'value'], (v) => v = action.value);
            return state;

        case constants.UPDATE_NEW_COURSE:
            state = state.setIn(['courseToAdd', action.property], action.value);
            return state;

        case constants.VALIDATE_COURSE:   
            state = state.setIn(['error', action.property], action.value);
            return state;            

        case constants.UPDATE_COURSE_FORM_VALUE: 
            let index = state.get('coursesList').findIndex((course)=> {return course.get('Id') === action.course.get('Id');});
            state = state.setIn(['coursesList', index, action.key], action.value );
            return state;
        default:
            return state;
    }
}

export default coursesReducer;