import keyMirror from '../../node_modules/fbjs/lib/keyMirror';

 var constants = {
        CREATE_COURSE: null, 
        DELETE_COURSE: null,
        LOAD_COURSES: null,
        LOADED_COURSES: null,
        UPDATE_COURSE: null,
        UPDATE_COURSE_VALUE: null,
        UPDATE_COURSE_FORM_VALUE: null,  
        UPDATE_NEW_COURSE: null,
        RESET_COURSE: null,     

        LOAD_AUTHORS: null,

        //notification system actions
        ADD_NOTIFICATION: null,        
};

export default keyMirror(constants);