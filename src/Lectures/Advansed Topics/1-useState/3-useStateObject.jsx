import React , {useState}from 'react';

function UseStateObject() {
    let [person , setPerson] = useState({
        name : "ali ashraf ali",
        id: 1,
        message : 'Hello ali'
    })
    const ChangeM = () =>{
        setPerson({...person , message : "Random"})
    }
    return (  
        <>
        <h2>{person.name}</h2>
        <h2>{person.id}</h2>
        <h2>{person.message}</h2>
        <button onClick={ChangeM}>change</button>
        </>

    );
}

export default UseStateObject;