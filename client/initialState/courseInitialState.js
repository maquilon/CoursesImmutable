import Immutable from 'immutable';

export default {
    courses: Immutable.fromJS({        
        coursesList: [],
        course: { 
            title: '', 
            authorId: '', 
            category: '', 
            length: '' },
        courseToAdd: { title: '', authorId: '', category: '', length: '' },
        error: { title: '', authorId: '', category: '', length: ''},
        loaded: false
    })
};
