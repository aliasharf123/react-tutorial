import React, { useState, useEffect } from 'react';
function UseEffectBasics() {
    const [value , setValue] = useState(0);
    useEffect(() =>{
        if (value >= 1 ){
            document.title = `new Message ${value}`
        }
    })  
    
    return ( <>
    <h1> {value}</h1>
    <button className='btn btn-primary' onClick={() => { setValue(value + 1)}}> click here</button>
    </> );

}

export default UseEffectBasics;