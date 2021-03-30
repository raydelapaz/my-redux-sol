import movies from './../data.js';

const initialState = {
    movies: movies
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default reducer;