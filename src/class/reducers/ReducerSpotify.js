import { SET_DEVICE_ID, SET_TRACK } from "../constants/ActionTypes"

const initialState = {
    currentTrack: "",
    playing: false,
    deviceId: null
}

const ReducerSpotify = (state = initialState, action) => {
    switch (action.type){
        case SET_TRACK: {
            return {
                ...state,
                currentTrack: action.payload
            }
        }
        case SET_DEVICE_ID: {
            return {
                ...state,
                deviceId: action.payload
            }
        }

        default: return state
    }
}

export default ReducerSpotify