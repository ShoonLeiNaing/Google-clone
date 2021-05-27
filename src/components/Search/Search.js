import React from 'react'
import './Search.css'
import MicIcon from '@material-ui/icons/Mic'
import SearchIcon from '@material-ui/icons/Search'

export const Search = () => {
    return (
        <div className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon'/>
                <input />
                <MicIcon />
            </div>
        </div>
    )
}
