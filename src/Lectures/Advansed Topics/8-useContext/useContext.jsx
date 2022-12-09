import React, { useState, useContext} from 'react';
import { data } from '../../../data';
import {GoX} from 'react-icons/go'
// context Api 
const peopleContext = React.createContext(null);
// it return two component provider and (consumer) replaced by useContext 

function UseContext() {
    const [people ,setPeople] = useState(data);

    const removePerson = (id) =>{
        setPeople(people.filter((person)=> person.id !== id));
    }
    return ( 
        <peopleContext.Provider value={removePerson}>
            <h3>Prob Drilling</h3>
            <List people ={people} ></List>
        </peopleContext.Provider> 
    );
}
function List({people}) {
    return (
         <>
            {people.map((person) =>{
                return(<SinglePerson person={person} />);
            })}
        </> 
    );
}
function SinglePerson({person}) {
    const removePerson = useContext(peopleContext);
    return ( 
        <div className='item'>
            <h5>{person.name}</h5>
            <button onClick={() => removePerson(person.id)}>
            <GoX></GoX>    
            </button>
        </div> 
    );
}


export default UseContext;
