import '../css/App.css';
import MainScreen from './screen/MainScreen';
import store from '../class/store/Store'
import { useDispatch, useSelector } from 'react-redux';
import { SET_SEARCH_RESULT, START_SEARCH, SEARCH_ENTERED, INSERT_SEARCHED_ALBUM, SET_TOKEN, CLEAR_ALBUM } from '../class/constants/ActionTypes';
import { useEffect, useState } from 'react';
import ComponentInteractiveAlbum from './album/ComponentInteractiveAlbum';
import { v4 } from 'uuid'
import ScreenAlbum from './screen/ScreenAlbum';
import { requestSearch } from '../util/CacheUtil'
import { useLocation } from 'react-router-dom';
import SpotifyPlayer from './default/buttons/SpotifyPlayer';
import LoginButton from './default/buttons/LoginButton';
import { CSSTransition } from 'react-transition-group';

function App() {

  const screenState = useSelector((state) => state.ReducerScreen)
  const cacheState = useSelector((state) => state.ReducerCache)
  const dispatch = useDispatch()

  const query = useLocation().search

  const keyListener = (event) => {
    const character = event.key
    switch(character) {
        case 'Enter': {
          const value = store.getState().ReducerSearch.value
  
          requestSearch(value.toString()).then((response) => {
              dispatch({ type: SEARCH_ENTERED })
              let items = response.data
              let searchItems = items.map(item => {
                let artists = item.artists.map(artist => artist.name)
                return <ComponentInteractiveAlbum key={v4()} imageUrl={item.images[1].url} albumId={item.id} albumName={item.name} artistNameList={artists} />
              })
              dispatch({ type: START_SEARCH })
              dispatch({ type: SET_SEARCH_RESULT, payload: searchItems })
              dispatch({ type: INSERT_SEARCHED_ALBUM, payload: items.slice(0, 3).map(item => { return item.id }) })
          })
          break
        }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keyListener);
    const userToken = new URLSearchParams(query).get("access_token")
    if (cacheState.token != userToken){
      dispatch({type: SET_TOKEN, payload: userToken})
    }
    
  }, [])
  
  const [ triggerAlbum, setAlbumPage ] = useState(false)
  const [ triggerRecommended, setRecommended ] = useState(true)

  useEffect(() => {
      if (screenState.inside_album){
        setRecommended(false)
      } else{
        setAlbumPage(false)
      }
  }, [screenState])

  return (
      <div className="App">
        <CSSTransition in={triggerRecommended} timeout={400} unmountOnExit onExited={() => setAlbumPage(true)} classNames="recent-albuns-transition">
          <MainScreen />
        </CSSTransition>
        <CSSTransition in={triggerAlbum} timeout={400} unmountOnExit onExited={() => {setRecommended(true); dispatch({ type: CLEAR_ALBUM })}} classNames="searched-albuns-transition">
          <ScreenAlbum />
        </CSSTransition>
        <div className='footer-filler'></div>
        {cacheState.token != null && <SpotifyPlayer />}
        {cacheState.token == null && <LoginButton />}
      </div>
  );
}

export default App;
