import React from 'react';
import { v4 } from 'uuid';
import ButtonGoBack from '../default/buttons/ButtonGoBack';

export default function ComponentAlbum({ imageUrl, albumName, artistNameList, songs }) {

  return <div>
    <ButtonGoBack />
    <div key={v4()} className='music-album'>
      <div className='album-details'>
        <img className='music-album-image' src={imageUrl} />
        <p className='music-album-name'>{albumName}</p>
        {artistNameList.map(artist => <p key={v4()} className='interactive-album-artist'>{artist}</p>)}
      </div>
      {songs}
    </div>
  </div>;
}
