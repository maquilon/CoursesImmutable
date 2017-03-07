import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import coursesReducer from './coursesReducer';
import authorsReducer from './authorsReducer';
import { notificationReducer } from './notificationReducer';

const rootReducer = combineReducers({
    courses: coursesReducer,
    authors: authorsReducer,
    routing: routerReducer,
    notificationSystem: notificationReducer
});

export default rootReducer;