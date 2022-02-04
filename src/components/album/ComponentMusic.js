import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import playButton from '../../assets/play_button.png'

export default function ComponentMusic({ id, name, duration, albumId }) {
  
  const stateSpotify = useSelector((state) => state.ReducerSpotify)
  const stateCache = useSelector((state) => state.ReducerCache)

  function playSong() {
    if (stateSpotify.deviceId == null) return
    axios.put("https://api.spotify.com/v1/me/player/play?device_id=" + stateSpotify.deviceId, {
      context_uri: albumId,
      offset: { position: id-1 },
      position_ms: 0
    },
      {
        headers: {
          "Authorization": "Bearer " + stateCache.token,
          "content-type": "application/json"
        }
      })
  }

  return <div className='music-container'>
    <p className='music-id'>{id}.</p>
    <p className='music-name'>{name}</p>
    <p className='music-duration'>{duration}</p>
    <img src={playButton} className='spotify-play-song' onClick={playSong} />
  </div>;
}
