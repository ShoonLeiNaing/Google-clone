import React from 'react'
import { useStateValue } from '../../StateProvider'
import useGoogleSearch from '../../useGoogleSearch'
import { Search } from '../../components/Search/Search'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ImageIcon from '@material-ui/icons/Image'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DescriptionIcon from '@material-ui/icons/Description'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'



import './SearchPage.css'

function SearchPage() {
    const [{ term }, dispatch] = useStateValue()
    const{data} =useGoogleSearch(term);
    console.log(data)
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to='/'>
                    <img className='searchPage__logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png' />
                </Link>
                <div className='searchPage__headerBody'>
                    <Search hideButtons />
                    <div className='searchPage__options'>
                        <div className='searchPage__optionsLeft'>
                            <div className='searchPage__option'>
                                <SearchIcon />
                                <Link>
                                    All
                                </Link>
                            </div>
                            <div className='searchPage__option'>
                                <ImageIcon />
                                <Link>
                                    Images
                                </Link>
                            </div>
                            <div className='searchPage__option'>
                                <DescriptionIcon />
                                <Link>
                                    News
                                </Link>
                            </div>
                            <div className='searchPage__option'>
                                <LocalOfferIcon />
                                <Link>
                                    Shopping
                                </Link>
                            </div>

                            <div className='searchPage__option'>
                                <RoomIcon />
                                <Link>
                                    Books
                                </Link>
                            </div>
                            <div className='searchPage__option'>
                                <MoreVertIcon />
                                <Link>
                                    More
                                </Link>
                            </div>
                        </div>


                        <div className='searchPage__optionsRight'>
                            <div className='searchPage__option'>
                                <Link>
                                    Settings
                                </Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link>
                                    Tools
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {term && (
                <div className='searchPage__results'>
                    <p>
                    About {data?.searchInformation.formattedTotalResults} results 
                    ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>
                    {data?.items.map(item=>(
                         <div className='searchPage__result'>
                             <div className='searchPage__resultSmallTitle'>
                                 <a href={item.link}>{item.displayLink}</a>
                            </div>
                             <a className='searchPage__resultTitle' href={item.link}>
                                <h2>{item.title}</h2>
                             </a>
                             <p className='searchPage__resultSnippet'>
                                {item.snippet}
                             </p>
                         </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default SearchPage
