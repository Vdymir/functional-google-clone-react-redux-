
import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

            setState({
                data,
                loading: false,
                error: null
            })
        })
    }, [url])


    return state;
}