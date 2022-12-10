import React from 'react';
import { useState } from 'react';
import List from './person';
import data from "./data"
import '../../../index.css'
function Birthday() {
 const [value ,setValue] = useState(data.length);
 const [LISt , setList] = useState(List);

const removeAll = () =>{
    setList(<h4>no one Birthday today</h4>);
    setValue(0)
}
return ( 
    <section >
        <div className='container'>
            <h3 style={{marginBottom: "30px" }}><span>{value}</span> Birthday today</h3>
            {LISt}
            <button className='ClearAll' onClick={removeAll}>Clear All</button>
        </div>
    </section>
     );
}

export default Birthday;