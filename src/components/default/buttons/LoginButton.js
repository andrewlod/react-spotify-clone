import React from 'react';
import { useNavigate } from 'react-router';
import loginImage from '../../../assets/spotify_logo.png'

export default function LoginButton(props) {

    const navigate = useNavigate()

  return <div className='spotify-song-panel'>
          <a href='/login' title='Login with Spotify'><img className='spotify-login-image' src={loginImage} /></a>
  </div>;
}
