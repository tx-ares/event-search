import { SEARCH_EVENTS, DISPLAY_EVENTS } from '../actions/types';

const initialState = { //Exactly what it sounds like.  State before it's changed.
    items: [], // All current posts.
    item: {} // The new post being added.
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SEARCH_EVENTS:
            return {
                ...state,
                items: action.payload
            }
        case DISPLAY_EVENTS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}
