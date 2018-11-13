import { constants } from 'constants/actions';
import { api } from 'constants/api-config';

const actions = {
    setInput: input => {
        return {
            type: constants.SETSEARCHINPUT,
            data: input
        }
    },
    setResults: results => {
        return {
            type: constants.SETSEARCHRESULTS,
            data: results
        }
    },
    handleErrors: error => {
        alert(error.message);
    },
    getResults: input => {
        return dispatch => {
            const fetchURL = api.OMDB_API + "/?apikey=" + api.OMDB_KEY + "&s=" + input + "&r=json";

            fetch(fetchURL).then( data => {
                data.json().then( data => {
                    dispatch(actions.setResults(data.Search));
                }).catch( error => {
                    dispatch(actions.handleErrors(error));
                });
            }).catch( error => {
                dispatch(actions.handleErrors(error));
            });
        }
    }
}

export { actions };