import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { requestAlbum } from '../../util/CacheUtil';
import ComponentInteractiveAlbum from './ComponentInteractiveAlbum';
import store from "../../class/store/Store"

export default function ComponentRecentAlbuns() {

    const recentAlbuns = useSelector((state) => state.ReducerRecentAlbuns)
    const [ clickProps, setClickProps ] = useState([])
    const [ clickComponents, setClickComponents ] = useState([])

    const [ searchProps, setSearchProps ] = useState([])
    const [ searchComponents, setSearchComponents ] = useState([])

    function onChange(){
        if (JSON.stringify(clickProps) !== JSON.stringify(recentAlbuns.clicked)) {
            setClickProps(recentAlbuns.clicked)
            Promise.all(recentAlbuns.clicked.map(id => {
                return createInteractiveAlbumComponent(id)
            })).then(items => {
                setClickComponents(items)
            })
        } 
        if (JSON.stringify(searchProps) !== JSON.stringify(recentAlbuns.searched)) {
            setSearchProps(recentAlbuns.searched)
            Promise.all(recentAlbuns.searched.map(id => {
                return createInteractiveAlbumComponent(id)
            })).then(items => {
                setSearchComponents(items)
            })
        }
    }

    let createInteractiveAlbumComponent = async (id) => {
        return new Promise((resolve, reject) => {
            requestAlbum(id).then(response => {
                let item = response.data
                let artists = item.artists.map(artist => artist.name)
                resolve(<ComponentInteractiveAlbum key={v4()} imageUrl={item.images[1].url} albumId={item.id} albumName={item.name} artistNameList={artists}  />)
            })
            
        })
    }

    useEffect(() => {
        const unsubscribe = store.subscribe(onChange)
        onChange()

        return () => {
            unsubscribe()
        }

    }, [])

    return <div>
        {clickComponents.length > 0 && <p className='recent-albuns-label'>Recently selected albums</p>}
        <div className='grid-albuns'>
            {clickComponents.length > 0 && clickComponents}
        </div>
        <p className='recent-albuns-label'>Recently searched albums</p>
        <div className='grid-albuns'>
            {searchComponents.length > 0 && searchComponents}
        </div>
    </div>;
}
        
