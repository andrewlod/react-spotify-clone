import { UPDATE_FIELD, SEARCH_ENTERED } from "../constants/ActionTypes"

const initialState = {
    value: "",
    staticValue: ""
}

const ReducerSearch = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_FIELD: {
            return {
                ...state,
                value: action.payload
            }
        }
        case SEARCH_ENTERED: {
            return {
                ...state,
                staticValue: state.value
            }
        }

        default: return state
    }
}

export default ReducerSearch