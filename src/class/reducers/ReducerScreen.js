import { START_SEARCH, STOP_SEARCH, LOAD_ALBUM, UNLOAD_ALBUM, CLEAR_ALBUM } from "../constants/ActionTypes"

const initialState = {
    searching: false,
    inside_album: false,
    current_album: null,
}

const ReducerScreen = (state = initialState, action) => {
    switch (action.type){
        case START_SEARCH: {
            return {
                ...state,
                searching: true
            }
        }
        case STOP_SEARCH: {
            return {
                searching: false,
                inside_album: false
            }
        }
        case LOAD_ALBUM: {
            return {
                ...state,
                inside_album: true,
                current_album: action.album
            }
        }
        case UNLOAD_ALBUM: {
            return {
                ...state,
                inside_album: false
            }
        }
        case CLEAR_ALBUM: {
            return {
                ...state,
                current_album: null
            }
        }

        default: return state
    }
}

export default ReducerScreen