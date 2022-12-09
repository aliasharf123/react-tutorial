import React from 'react';
import { GlobalContext } from './context';
import {Link} from 'react-router-dom'
import Loading from './Loading';
import Navbar from './Navbar';
const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png';

function Movies() {
    const { isLoading,movies} = GlobalContext();

    if(isLoading){
        return(
        <>
            <Navbar/>
            <Loading/>
        </>
        )
    }
    return (
        <>
            <Navbar/>
            <section className='Movies'>   
                {movies.map((movie) =>{
                    return(
                        <div key={movie.imdbID} className='Poster'>
                        <p>{movie.Title}</p>
                        <Link to={`/movie/${movie.imdbID}`}>
                            <img src={(movie.Poster === "N/A") ? defaultImage : movie.Poster } alt="" />
                        </Link> 
                    </div> 
                    )
                })} 
            </section>
        </>
    );
}



export default Movies;