import { INSERT_SEARCH_CACHE, INSERT_ALBUM_CACHE, INSERT_TRACK_CACHE, SET_TOKEN } from "../constants/ActionTypes"

const initialState = {
    search: {},
    tracks: {},
    albuns: {},
    token: null
}

const ReducerCache = (state = initialState, action) => {
    switch (action.type){
        case INSERT_SEARCH_CACHE: {
            state.search[action.key] = action.value
            return state
        }
        case INSERT_ALBUM_CACHE: {
            state.albuns[action.key] = action.value
            return state
        }
        case INSERT_TRACK_CACHE: {
            state.tracks[action.key] = action.value
            return state
        }
        case SET_TOKEN: {
            return {
                ...state,
                token: action.payload
            }
        }

        default: return state
    }
}

export default ReducerCache