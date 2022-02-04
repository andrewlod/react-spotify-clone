import { combineReducers } from 'redux'

import ReducerScreen from "./ReducerScreen";
import ReducerSearch from './ReducerSearch';
import ReducerSearchedAlbuns from './ReducerSearchedAlbuns';
import ReducerCache from './ReducerCache';
import ReducerRecentAlbuns from './ReducerRecentAlbuns';
import ReducerSpotify from './ReducerSpotify';

export default combineReducers({
    ReducerScreen,
    ReducerSearch,
    ReducerSearchedAlbuns,
    ReducerCache,
    ReducerRecentAlbuns,
    ReducerSpotify
})