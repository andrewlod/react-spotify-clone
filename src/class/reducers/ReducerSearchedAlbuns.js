import { SET_SEARCH_RESULT } from "../constants/ActionTypes"

const initialState = {
    albuns: []
}

const ReducerSearchedAlbuns = (state = initialState, action) => {
    switch (action.type){
        case SET_SEARCH_RESULT: {
            return {
                albuns: action.payload
            }
        }

        default: return state
    }
}

export default ReducerSearchedAlbuns