import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  // useParams it return object of thing after /:
  const [name ,setName] =useState('default name');
  const {id} = useParams();
  console.log(id)
  useEffect(()=>{
    const newPerson = data.find((person)=>person.id === id );
    setName(newPerson.name);
  },[]);
  return (
    <div>
      <h2>{name}</h2>
      <Link to='/people'>Back to people</Link>
    </div>
  );
};

export default Person;