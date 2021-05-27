import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'
import { Search } from '../../components/Search/Search'

export default function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>store</Link>
                </div>
                <div className='home__headerRight'>
                    <Link to='/email'>Email</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>
            <div className='home__body'>
                <img src="https://proofmart.com/wp-content/uploads/2021/01/google-logo-web.png"/>
                <div className='home__inputContainer'>
                    <Search/>
                </div>
            </div>
        </div>
    )
}
