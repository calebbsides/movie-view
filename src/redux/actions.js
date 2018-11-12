import constants from 'constants/actions';

const actions = {
    SETMOVIE: movie => {
        return {
            type: constants.SETMOVIE,
            data: movie
        }
    }
}

export { actions }