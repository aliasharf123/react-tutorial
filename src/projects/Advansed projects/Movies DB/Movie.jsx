import React from 'react';
import {Link , useParams} from 'react-router-dom'
import Loading from './Loading';
import useFetch from './UseFetch'
const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png';
function SingleMovie() {
    const {id} = useParams()
    const {data ,isLoading} = useFetch(`&i=${id}`); 
    if(isLoading){
        return(
            <Loading/>
        )
    }
    const {Title , Poster , Rated , Plot} = data ;
    return ( 
        <div className='movie'>
            <img src={(Poster === "N/A") ? defaultImage : Poster } alt={Title} />
            <div className='Movie-info'>
                <h1>{Title}</h1>
                <p>{Plot}</p>
                <div className={`rated ${Rated}`}>
                    <p>{Rated}</p>
                </div> 
                <Link to='/'>
                <button>Back Home</button>
                </Link>
            </div>
        </div> 
    );

}

export default SingleMovie;