import React from 'react';
import './Home.css';
import AppsIcon from '@material-ui/icons/Apps';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Avatar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Search from '../components/Search';

const HomePage = () => {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">           
                    <IconButton className="home__headerIcons">
                        <GitHubIcon />
                        <p>-vdymir</p>
                    </IconButton>         
                    
                </div>
                <div className="home__headerRight">
                    <Link to="">Gmail</Link>
                    <Link to="">Imagenes</Link>
                    <IconButton className="home__headerIcons">
                        <AppsIcon />
                    </IconButton>
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                <img src='https://1000marcas.net/wp-content/uploads/2019/11/Google-Logo.png' alt="Logo Google" />
                <Search />
            </div>
        </div>
    )
}

export default HomePage
