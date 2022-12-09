import React, { useState, useEffect } from 'react';

function ShortCircut() {
    const [text , setText] = useState("");
    const [isError , setIsError] = useState(false);
    return (
        <div>
            <h1 className='text-center'>{text || "joun wick"}</h1>
            <button className='btn btn-primary' style={{
                marginLeft: "46%"
            }} onClick={() =>{
                setIsError(!isError)
                }}>toggle Error</button>
            {text && <h1 className='text-center'>{`Hello ${text}`}</h1> /* short circut */ }
            {isError ? <h2 className='text-center'>Error...</h2> : <h2 className='text-center'>No Error...</h2>  /* ternary Operator */ }
        </div> 

    );
}

export default ShortCircut;