import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { GoogleInput } from './GoogleInput'
import { GoogleButton } from './GoogleButton'
import './Search.css'
import { setTextstring } from '../features/textSlice'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Search = ({hideButton = false}) => {

    const [input, setInput] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();


    const search = (e)=> {
        e.preventDefault();
        dispatch(setTextstring(input));
        
        history.push("/search")
    }

    return (
        <>
            <form className="search" onSubmit = {search} >
                <GoogleInput>
                    <SearchIcon className="search__inputIcon"/>
                    <input value={ input } onChange={ e => setInput(e.target.value)}/>
                    <MicIcon className="search__inputIcon"/>
                </GoogleInput >
                <div className="search__buttons">
                    <GoogleButton type="submit" className={hideButton ? "search__hidenButton" : ""}>Buscar con google</GoogleButton>
                    <GoogleButton className={hideButton ? "search__hidenButton" : ""}>Me siento con suerte</GoogleButton>
                </div>
            </form>
        </>
    )
}

export default Search
