import React, { useState} from 'react';
import reviews from './data';
import Review from './reveiw';

function Reviews() {
    const [reviewer , setReviewer] = useState(reviews[0]);

    const goLeft = (id) =>{
        console.log(id)

        if(id === 0) id = 1;

        if(id === 1 ){
            setReviewer(reviews[3]); 
        }
        else{
            const number = id -1
            setReviewer(reviews[number - 1]); 
        }
    }
    const goRight = (id) =>{
        console.log(id)

        if(id === 0) {
            id = 1;
            setReviewer(reviews[1])
        }else{
            if (id === 3){
                setReviewer(reviews[0]); 
            }
            else{
                setReviewer(reviews[id +1]); 
            }
        }
    }
    const Surpriseme = (min , max  , id) =>{
        id = id -1 ;
        const random = () =>{
            return Math.floor(Math.random() * (max - min) ) + min ; 
         }
        let number = random() ; 
        while ( number === id){
             number = random();
         }
         console.log(number)
         setReviewer(reviews[number ])
    }
    return ( 
        <main>
           <div>
             <h2 className='title'>Our Reviews</h2>
             <div className='underline'/>
            </div>
            <Review  reviewer = {reviewer}  goLeft = {goLeft} goRight = {goRight} Surpriseme = {Surpriseme}></Review>
        </main> 
    );
}

export default Reviews;