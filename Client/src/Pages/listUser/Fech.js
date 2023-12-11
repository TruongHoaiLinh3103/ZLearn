import axios from 'axios';
import  { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [looding, setLooding] = useState(true)
    const source = new AbortController()
    try {
        useEffect(() => {
            async function fetchData() {
                setTimeout(async () => {
                    let res = await axios.get(url, { signal: source.signal })
                    let data = res.data && res.data.data ? res.data.data : []
                    setData(data);
                    setLooding(false);
                }, 2000)
            }
            fetchData();
        })
    } catch (error) {
        setLooding(false);
        if(error.name === source){
            console.log("Not cancel!");
        }
    }

    return ({data, looding})
}

export default useFetch;