import { INSERT_CLICKED_ALBUM, INSERT_SEARCHED_ALBUM } from "../constants/ActionTypes"

let recentAlbunsClicked = localStorage.getItem("recent_albuns_clicked")
let recentAlbunsSearched = localStorage.getItem("recent_albuns_searched")

const initialState = {
    clicked: recentAlbunsClicked ? JSON.parse(recentAlbunsClicked) : [],
    searched: recentAlbunsSearched ? JSON.parse(recentAlbunsSearched) : []
}

const ReducerRecentAlbuns = (state = initialState, action) => {
    switch (action.type){
        case INSERT_CLICKED_ALBUM: {
            const index = state.clicked.indexOf(action.payload)
            if (index > -1) state.clicked.splice(index, 1)

            state.clicked.unshift(action.payload)
            if (state.clicked.length > 10) state.clicked = state.clicked.splice(0,14)
            localStorage.setItem("recent_albuns_clicked", JSON.stringify(state.clicked))
            return state
        }
        case INSERT_SEARCHED_ALBUM: {
            action.payload.forEach(item => {
                const index = state.searched.indexOf(item)
                if (index > -1) state.searched.splice(index, 1)
            })

            state.searched.unshift(...action.payload)
            if (state.searched.length > 10) state.searched = state.searched.splice(0,14)
            localStorage.setItem("recent_albuns_searched", JSON.stringify(state.searched))
            return state
        }

        default: return state
    }
}

export default ReducerRecentAlbuns