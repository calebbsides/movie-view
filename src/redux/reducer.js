import { constants } from 'constants/actions';

const initialState = {
    searchInput: "",
    searchResults: null
}

const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case constants.SETSEARCHRESULTS: 
            return {
                ...state,
                searchResults: action.data
            };
        case constants.SETSEARCHINPUT:
            return {
                ...state,
                searchInput: action.data
            }
        default:
            return state;
    }
}

export { reducer };