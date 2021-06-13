import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import ImageIcon from '@material-ui/icons/Image'
import VideocamIcon from '@material-ui/icons/Image'
import MapIcon from '@material-ui/icons/Map'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DescriptionIcon from '@material-ui/icons/Description'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar, IconButton } from '@material-ui/core'
import { selectTextString } from '../features/textSlice'
import { useSelector } from 'react-redux'
import API_KEY, { CONTEXT_KEY } from '../key'
import { useFetch } from '../hooks/useFetch'
import Result from '../components/Result'

const SearchPage = () => {

    const textString = useSelector(selectTextString);

    const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${textString}`;

    const  {data, loading}  = useFetch(url);

    
    console.log(data)
    return (
        <>
            <div className="searchPage">
                <div className="searchPage__header">
                    <div className="searchPage__headerLeft">
                    <Link to="/">
                        <img className="searchPage__logo" src='https://1000marcas.net/wp-content/uploads/2019/11/Google-Logo.png' alt="Logo Google" />
                    </Link>

                    <div className="searchPage__headerCenter">

                        <Search hideButton />

                        <div className="searchPage__options">
                            <div className="search__optionsLeft">
                                <div className="search__option">
                                    <SearchIcon fontSize="small" />
                                    <Link to="/">all</Link>
                                </div>
                                <div className="search__option">
                                    <ImageIcon fontSize="small" />
                                    <Link to="/">Image</Link>
                                </div>
                                <div className="search__option">
                                    <VideocamIcon fontSize="small" />
                                    <Link to="/">Video</Link>
                                </div>
                                <div className="search__option">
                                    <DescriptionIcon fontSize="small" />
                                    <Link to="/">Noticias</Link>
                                </div>
                                <div className="search__option">
                                    <MapIcon fontSize="small" />
                                    <Link to="/">Maps</Link>
                                </div>
                                <div className="search__option">
                                    <MoreVertIcon fontSize="small" />
                                    <Link to="/">Más</Link>
                                </div>
                            </div>
                            <div className="search__optionsRight">
                                <div className="search__option">
                                    <Link to="/">Preferencia</Link>
                                </div>
                                <div className="search__option">
                                    <Link to="/">Herramientas</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="search__headerRight">
                        <IconButton className="search__optionIcons">
                            <AppsIcon />
                        </IconButton>
                        <Avatar />
                    </div>
                </div>
                {  
                    loading ? 
                    <div className="searchPage__spiner"></div>
                    :
                    <div className="searchPage__result">
                        <p className="searchPage__resultCount">
                            About { data?.searchInformation.formattedTotalResults } result ({data?.searchInformation?.formattedSearchTime} seconds)
                        </p>
                        {
                            data.items?.map( item => (
                                <Result key= {item.cacheId} data={item}/>
                            ))
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default SearchPage
