// This file acts as a funnel to combine all reducers into one object.

import { combineReducers } from 'redux';
import postReducer from './postReducer'; // if there's a reference error, add .js extension
import eventReducer from './eventReducer'; // if there's a reference error, add .js extension

export default combineReducers({
    posts: postReducer,
    events: eventReducer
});
