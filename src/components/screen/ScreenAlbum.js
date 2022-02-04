import React from 'react';
import { useSelector } from 'react-redux';

export default function ScreenAlbum() {

  const screenState = useSelector((state) => state.ReducerScreen)

  return <div className='screen-container'>
    {screenState.current_album}
  </div>;
}
