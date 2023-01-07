import React, { useState } from 'react';

function MultipleInputs() {
    const [people , setPeople] = useState([]);
    const [Error , setError] = useState('');
    const [person , setPerson] = useState({id: "" , FirstName: "" , email:"", age:""});
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(person.FirstName && person.age && person.email){
            const newPerson = {...person , id: new Date().getTime().toString() }
            setPeople((people) =>{
                return([...people , newPerson]) 
            })
        }
        else{
            setError("Fill your Info");
        }
        setPerson({id: "" , FirstName: "" , email:"", age:""})
    }
    const handelChange = (e) =>{
        const name = e.target.name ;  // make accees to input name 
        const value = e.target.value ;
        setPerson({...person , [name]: value }); //dynamix object properites
    }
      return ( 
    <>
        <article>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="FirstName">FirstName: </label>
                    <input 
                        type="text"
                        id='FirstName'
                        name='FirstName' 
                        value={person.FirstName}
                        onChange={handelChange}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        id='email'
                        name='email'
                        value={person.email}
                        onChange={handelChange}                    
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="age">Age: </label>
                    <input 
                        type="text" 
                        id='age'
                        name='age'
                        value={person.age}
                        onChange={handelChange}                    
                    />
                </div>
                <button type = "submit">Submit</button>
            </form>
            <h3 style={{
                color: "red" ,
                textAlign: "center"
            }}>{Error}</h3>
            {people.map((person) =>{
                const {id , FirstName , email , age} = person;
                return(
                    <div key={id} className="item">
                        <h4>{FirstName}</h4>
                        <p>{age}</p>
                        <p>{email}</p>
                    </div>
                );
            })}
        </article>
    </> 
    );
}

export default MultipleInputs;