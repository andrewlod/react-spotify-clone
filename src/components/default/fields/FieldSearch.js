import React from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_FIELD } from '../../../class/constants/ActionTypes';

export default function FieldSearch() {

    const dispatch = useDispatch()

    function handleChange(event) {
        dispatch({ type: UPDATE_FIELD, payload: event.target.value })
    }

    return <div>
        <p className='search-bar-label'>Busque por artistas, álbuns ou músicas</p>
        <input className='field-search' placeholder={'Comece a escrever...'} onChange={handleChange}></input>
    </div>;
}
