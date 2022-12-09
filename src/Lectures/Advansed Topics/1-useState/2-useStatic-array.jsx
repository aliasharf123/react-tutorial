import React ,{ useState } from 'react';
import {data} from '../../data'

function UseStateArray() {
    let [people, setPeople] = useState(data);

    const removeOne = (id) =>{
        let newPeople = people.filter((person) => person.id !== id)
        setPeople(newPeople)
    }
    return ( 
        <>
        {people.map((person) => {
            const { name , id } = person 
            return(
                <div id= {id} >
                    <h4> {name}</h4>
                    <button onClick={() => removeOne(id)}> Remove </button>
                </div>
            )

            })}
        <button onClick={() => setPeople([])}> Clear all</button>
        
        </>
     );
}
export default UseStateArray ; 