import React from 'react';
import { useDispatch } from 'react-redux';
import { UNLOAD_ALBUM } from '../../../class/constants/ActionTypes';
import { ReactComponent as GoBackIcon } from "../../../assets/goback.svg"

export default function ButtonGoBack() {

  const dispatch = useDispatch()

  function goBack(){
      dispatch({ type: UNLOAD_ALBUM })
  }

  return <div className='button-go-back-container'>
    <div className='go-back-container-clickable' onClick={goBack}>
      <GoBackIcon className='icon-go-back' />
      <p className='button-go-back'>Go back</p>
    </div>
  </div>;
}
