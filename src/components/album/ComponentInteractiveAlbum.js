import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { INSERT_CLICKED_ALBUM, LOAD_ALBUM } from '../../class/constants/ActionTypes';
import ComponentAlbum from './ComponentAlbum';
import ComponentMusic from './ComponentMusic';
import { requestAlbumTracks } from '../../util/CacheUtil';

export default function ComponentInteractiveAlbum({ imageUrl, albumId, albumName, artistNameList }) {

  const dispatch = useDispatch()

  function openAlbum() {

    requestAlbumTracks(albumId).then(response => {
      let songs = response.data.map((item, i) => {
        let duration_hours = Math.floor(item.duration_ms/3600000)
        let duration_minutes = Math.floor((item.duration_ms % 3600000) / 60000)
        let duration_seconds = Math.round((item.duration_ms % 60000) / 1000)
        let duration = (duration_hours > 0 ? `${duration_hours}:` : "") + `${duration_minutes}:` + (duration_seconds > 9 ? `${duration_seconds}` : `0${duration_seconds}`)
        return <ComponentMusic key={v4()} id={i+1} name={item.name} duration={duration} albumId={"spotify:album:" + albumId} />
      })
      
      dispatch({ type: LOAD_ALBUM, album: <ComponentAlbum imageUrl={imageUrl} albumName={albumName} artistNameList={artistNameList} songs={songs} /> })
      dispatch({ type: INSERT_CLICKED_ALBUM, payload: albumId })

    })

  }

  return <div key={ v4() } className='interactive-album' onClick={openAlbum}>
    <img alt='' className='interactive-album-image' src={imageUrl} />
    <p className='interactive-album-name'>{albumName}</p>
    {artistNameList.map(artist => <p key={v4()} className='interactive-album-artist'>{artist}</p>)}
  </div>;
}
