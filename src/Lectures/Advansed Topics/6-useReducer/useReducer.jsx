import Model from "./model";
import React, { useState  , useReducer} from "react";
import { reducer } from "./reducer";

const intial ={
  people: [],
  showModel : false,
  modelContent : ''
}
function Index() {
  const [name, setName] = useState("");
  const [state , dispatch] = useReducer(reducer , intial)
  const handelSubmit = (e) => {
    e.preventDefault();
    const newPerson = {name , id: new Date().getTime().toString()};
    if (name) {
      dispatch({type: "ADD_PERSON" , patLoad: newPerson})
    } else {
      dispatch({type : "FILL"})
    }
  };


  const closeModel =() =>{
    dispatch({type:"ClOSED_MODEL"});
  }
  return (
    <>
      {state.showModel && <Model content={state.modelContent} closeModel ={closeModel}/>}
      <form onSubmit={handelSubmit} className="form">
        <div>
          <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add Person</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
           <p>{person.name}</p>
           <button onClick={() => dispatch({type:"REMOVE_PERSON" , patLoad: person.id})}>remove</button>
          </div>
        );
      })}
    </>
  );
}

export default Index;
