import React, { useState } from 'react';
import Text from './data';

function LoremIpusum(){
    const [number , setNumber] =useState("");
    const [text , setText] =useState([]);
    const [error , setError] = useState('');
    const Generate = (e) =>{
        e.preventDefault();
        if(number && number !== '0'){
            const newText = Text.slice(0, parseInt(number));
            setText(newText)
            setError('')
        }
        else{
            setError("Put a Number");
            setText([])
        }
    }
    const handleChange = (e)=>{
        setNumber(e.target.value);
    }
    return ( 
        <main >
            <h1>TIRED OF BORING LOREM IPSUM?</h1>
            <form onSubmit={Generate}>
                <label htmlFor="number">Paragraph: </label>
                <input 
                    type="number" 
                    value={number}
                    name="number" 
                    id='number'
                    onChange={handleChange}
                />
                <button>GENERATE</button>
            </form>
            <h2 style={{
                color:"red",
                textAlign: "center"
            }}>{error}</h2>
            {text.map((paragraph)=>{
                return <p>{paragraph}</p>
            })}
        </main> 
    );
}

export default LoremIpusum;