import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ComponentRecentAlbuns from '../album/ComponentRecentAlbuns';
import ComponentSearchedAlbuns from '../album/ComponentSearchedAlbuns';
import FieldSearch from '../default/fields/FieldSearch';

export default function MainScreen() {

    const screenState = useSelector((state) => state.ReducerScreen)

    const [ triggerSearching, setSearching ] = useState(false)
    const [ triggerRecommended, setRecommended ] = useState(true)

    useEffect(() => {
        if (screenState.searching){
            setRecommended(false)
        } else{
            setSearching(false)
        }
    }, [screenState])

    return <div className='screen-container'>
        <FieldSearch />
        <CSSTransition in={triggerRecommended} timeout={400} unmountOnExit onExited={() => setSearching(true)} classNames="recent-albuns-transition">
            <div>
                <ComponentRecentAlbuns />
            </div>
        </CSSTransition>
        <CSSTransition in={triggerSearching} timeout={400} unmountOnExit onExited={() => setRecommended(true)} classNames="searched-albuns-transition">
            <div>
                <ComponentSearchedAlbuns />
            </div>
        </CSSTransition>
    </div>;
}
