import { Link } from '@material-ui/core'
import React from 'react'
import './Result.css'

const Result = ({ data : {title, link, displayLink, snippet} }) => {

    const handleClick = () => {
        window.location.assign({link})
    }
    return (
        <div className="result">
            <p className="result__link">
                <Link href={link}>{displayLink}</Link>
            </p>
            <h2 className="result__title" onClick={ handleClick } >{title}</h2>
            <p className="result__snipet">{snippet}</p>
        </div>
    )
}

export default Result
