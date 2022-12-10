import React, { useState, useEffect } from 'react';
import Loading from './Loading'
import Tours from './tours';
import './indexTour.css'

const url = 'https://course-api.com/react-tours-project'

function Tour() {
    const [tours , setTours] =useState([]);
    const [IsLoading , setIsLoading] = useState(true);
    const [IsError , setIsError] =useState(false);
    const notInterseted =(id) => {
        const newtours = tours.filter((tour) => {return (tour.id !== id)})
       setTours(newtours);
     }
    const fetchData = () =>{
        fetch(url)
        .then((resp) =>{
            setIsLoading(false);
            if(!resp.ok){
                setIsError(true);
                throw new Error(resp.statusText);
            }
            return resp.json();
        })
        .then((tours) => {
            setTours(tours);
        })
        .catch((error) => {
            setIsLoading(false);

            setIsError(true)
            console.log(error)
        });
    }
    useEffect(()=>{
       fetchData();
    },[])
    if(IsLoading){
        return ( 
            <main>
                <Loading/>
            </main>
         );
    }
    else if(IsError){
        return ( 
            <main>
               <div>
                <h1>Error...</h1>
               </div>
            </main>
         );
    }
    else  if (tours.length === 0) {
        return (
          <main>
            <div className='title'>
              <h2>no tours left</h2>
              <button className='btn' onClick={() =>   fetchData()}>
                refresh
              </button>
            </div>
          </main>
        )
      }
    else{
        return ( 
            <main>
                <Tours tours = {tours}  remove = {notInterseted}></Tours>
            </main>
         );
    }
}

export default Tour;