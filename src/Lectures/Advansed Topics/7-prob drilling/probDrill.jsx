import React, { useState  } from 'react';
import { data } from '../../../data';

// its problem to take data from top to bottom 


function ProbDrilling() {
    const [people ,setPeople] = useState(data);

    const removePerson = (id) =>{
        setPeople(people.filter((person)=> person.id !== id));
    }
    return ( 
        <>
            <h3>Prob Drilling</h3>
            <List people ={people} removePerson={removePerson}></List>
        </> 
    );
}
function List({people , removePerson}) {
    return (
         <>
            {people.map((person) =>{
                return(<SinglePerson person={person} removePerson={removePerson}/>);
            })}
        </> 
    );
}
function SinglePerson({person , removePerson}) {
    return ( 
        <div className='item'>
            <h5>{person.name}</h5>
            <button onClick={() => removePerson(person.id)}>remove</button>
        </div> 
    );
}


export default ProbDrilling;
