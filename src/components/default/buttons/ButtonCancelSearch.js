import React from 'react';
import { useDispatch } from 'react-redux';
import { SET_SEARCH_RESULT, STOP_SEARCH } from '../../../class/constants/ActionTypes';
import { ReactComponent as GoBackIcon } from "../../../assets/goback.svg"

export default function ButtonCancelSearch() {

    const dispatch = useDispatch()

    function cancelSearch() {
        dispatch({ type: STOP_SEARCH })
        dispatch({ type: SET_SEARCH_RESULT, payload: [] })
    }

    return <div className='button-go-back-container'>
    <div className='go-back-container-clickable' onClick={cancelSearch}>
        <GoBackIcon className='icon-go-back' />
        <p className='button-go-back'>Voltar</p>
    </div>
    </div>;
}
