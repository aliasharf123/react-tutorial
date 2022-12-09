import React , {useState}from 'react';

function Counter() {
    let [value , setValue] =useState(0)
    const complexIncrease = () =>{
        setTimeout(()=> setValue((prev) => {return(prev +1)}),2000)
    }
    return (  
        <>
        <section style={{margin : "4 rem " , padding : "10px",textAlign: "center"}}>
        <h1>Regular Counter</h1>
        <h1>{value}</h1>
        <div style={{textAlign: "center"}}>
            <button className='btn btn-primary' style={{margin:"2px" }} onClick={() => setValue( value + 1)}>increase</button>
            <button className='btn btn-primary' style={{margin:"2px" }} onClick={() => setValue( value - 1)}>decrease</button>
            <button className='btn btn-primary' style={{margin:"2px" }} onClick={() => setValue(0)}>reset</button> 
        </div>
        <h1>complex Counter</h1>
        <h1>{value}</h1>
        <div style={{textAlign: "center"}}>
            <button className='btn btn-primary' style={{margin:"2px" }} onClick={complexIncrease}>increase</button>
        </div>
        </section>
        
        </>
    );
}

export default Counter;