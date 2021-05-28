import React,{useState} from 'react'
import './Search.css'
import MicIcon from '@material-ui/icons/Mic'
import SearchIcon from '@material-ui/icons/Search'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'

export const Search = ({ hideButtons=false}) => {
    const[{term},dispatch]=useStateValue()
    const[input,setInput]=useState('')
    const history=useHistory()
    const search=(e)=>{
        e.preventDefault()
        history.push('/search')
        dispatch({
            type:'SET_SEARCH_TERMS',
            term:input,
        })
    }
    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon'/>
                <input value={input} onChange={(e)=>setInput(e.target.value)} />
                <MicIcon />
            </div>
           {
               !hideButtons ? (
                <div className='search__buttons'>
                <Button type='submit' variant='outlined' onClick={search}>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
                </div>
               ):(
                <div className='search__buttons'>
                <Button className='search__buttonsHidden' type='submit' variant='outlined' onClick={search}>Google Search</Button>
                <Button className='search__buttonsHidden' variant='outlined'>I'm Feeling Lucky</Button>
                </div>
               )

           }
        </form>
    )
}
