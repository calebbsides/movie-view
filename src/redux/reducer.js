import { constants } from 'constants/actions';

const initialState = {
    movie: ""
}

const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case constants.SETMOVIE: 
            return {
                ...state,
                movie: action.data
            };
        default:
            return state;
    }
}

export { reducer };