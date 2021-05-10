import {TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from './../actions/favoritesActions';

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            };

        case ADD_FAVORITE:
            const favExists = state.favorites.find(fav => fav.id === action.payload.id);
            const favorites = favExists ? state.favorites : [...state.favorites, action.payload];

            return{
                ...state,
                favorites: favorites
            };

        case REMOVE_FAVORITE:
            return ({
                ...state,
                favorites: state.favorites.filter(fav => (fav.id !== action.payload))
            });
        
        default:
            return state;
    }
}

export default reducer;