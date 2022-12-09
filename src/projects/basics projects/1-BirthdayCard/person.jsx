import React from 'react';
import persons from './data';
function List() {
    return ( 
        <div>
        {persons.map((person) => {
            const {name, age , image , id} = person
            return(<div key={id} style={{display:'flex' , paddingBottom:"10px"}}>   
                 <img  className='images-person' src={image} alt="" style={{marginRight:"7px"}}/>
                 <div>
                    <h5 style={{marginTop: "10px"}}>{name}</h5>
                    <p  style={{ color:"#617d98" , marginBottom: "0px"}}>{age}</p>
                 </div>
            </div>)
        })}
    </div>
    );
}
export default List;