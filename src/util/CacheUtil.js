import axios from "axios"
import { INSERT_ALBUM_CACHE, INSERT_SEARCH_CACHE, INSERT_TRACK_CACHE } from "../class/constants/ActionTypes"
import store from "../class/store/Store"

export const requestSearch = async (query) => {
    const storeSearch = store.getState().ReducerCache.search
    if (query in storeSearch) {
        return storeSearch[query]
    } else {
        const response = await axios.post("/api", { query: query })
        store.dispatch({ type: INSERT_SEARCH_CACHE, key: query, value: response })
        return response
    }
}

export const requestAlbumTracks = async (id) => {
    const storeTrack = store.getState().ReducerCache.tracks
    if (id in storeTrack) {
        return storeTrack[id]
    } else {
        const response = await axios.post("/api/tracks", { id: id })
        store.dispatch({ type: INSERT_TRACK_CACHE, key: id, value: response })
        return response
    }
}

export const requestAlbum = async (id) => {
    const storeAlbum = store.getState().ReducerCache.albuns
    if (id in storeAlbum) {
        return storeAlbum[id]
    } else {
        const response = await axios.post("/api/album", { id: id })
        store.dispatch({ type: INSERT_ALBUM_CACHE, key: id, value: response })
        return response
    }
}