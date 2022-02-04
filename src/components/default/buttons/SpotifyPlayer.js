import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_DEVICE_ID } from '../../../class/constants/ActionTypes';
import playButton from '../../../assets/play_button.png'
import pauseButton from '../../../assets/pause_button.png'

export default function SpotifyPlayer() {

  const [ ready, setReady ] = useState(false)
  const [ player, setPlayer ] = useState(null)
  const [ paused, setPaused ] = useState(true)
  const [ track, setTrack ] = useState(null)

  const cacheState = useSelector((state) => state.ReducerCache)
  const dispatch = useDispatch()

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);
    window.onSpotifyWebPlaybackSDKReady = () => {
      const userToken = cacheState.token;
      const _player = new window.Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(userToken); },
        volume: 0.5
      });

      setPlayer(_player)

      // Ready
      _player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        setReady(true)
        dispatch({ type: SET_DEVICE_ID, payload: device_id })
      });

      // Not Ready
      _player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      _player.addListener('initialization_error', ({ message }) => {
        console.log("initialization error:",message);
      });

      _player.addListener('authentication_error', ({ message }) => {
        console.log("authentication error:",message);
      });

      _player.addListener('account_error', ({ message }) => {
        console.error("account error:",message);
      });

      _player.addListener('player_state_changed', ( state => {

        if (!state) {
            return
        }
          let artists;
          if (state.track_window.current_track.artists > 1){
            artists = state.track_window.current_track.artists.reduce((prev,current) => {
              return prev.name + ", " + current.name
            })
          }else{
            artists = state.track_window.current_track.artists[0].name
          }
        console.log(artists)
        setTrack(artists + " - " + state.track_window.current_track.name)
        setPaused(state.paused)
      }));
      _player.connect();

    }
    return () => {
      document.body.removeChild(script);
    }
  }, [])

  return <div className='spotify-song-panel'>
    {ready && paused && <img src={playButton} className='play-button' className='spotify-play-song' onClick={() => {player.togglePlay()}} />}
    {ready && !paused && <img src={pauseButton} className='play-button' className='spotify-play-song' onClick={() => {player.togglePlay()}} />}
    {ready && track != null && <p className='current-song'>Tocando agora: {track}</p>}
    {ready && track == null && <p className='current-song'>Nenhuma música tocando</p>}
  </div>;
}
