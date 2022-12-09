import { useState, useEffect } from 'react';
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=e60f3db2`;

const useFetch = (urlParmes) =>{
    const [isLoading , setIsLoading] = useState(true);
    const [isError , setIsError] = useState({show:false , msg:''});
    const [data , setData] = useState(null);

    const FetchMovies = async (url) =>{
        try{
        setIsLoading(true);
        const responce = await fetch(url);
        const movies = await responce.json();
        if(movies.Response === 'True'){
            setData(movies.Search || movies);
            setIsError({show: movies.Response , msg:""});
        }else{
            setIsError({show: movies.Response , msg: movies.Error});
            setIsLoading(false);
        }
        }catch(error){
            console.log(error);
        }
        setIsLoading(false)
    }
    useEffect(() =>{
        FetchMovies(`${API_ENDPOINT}${urlParmes}`)
    }, [urlParmes])

    return {data ,isError , isLoading}
}
export default useFetch ; 