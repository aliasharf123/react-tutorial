import React, { useState, useEffect } from 'react';

function UseEffectCleanUP() {
    const [size , setSize] =useState(window.innerWidth)

    const cheakSize = () =>{
        setSize(window.innerWidth)
    }
    useEffect(() =>{
        window.addEventListener('resize', cheakSize)
        return(() =>{
            window.removeEventListener('resize', cheakSize)
        })
    })
    return ( 
    <>
    <h2 className='text-center'>Window</h2>
    <h3 className='text-center'>{`${size} px`}</h3>
    </> );
}

export default UseEffectCleanUP;