import React from "react";

let Book = (prob) => {
    let {name , img , des } = prob.book

   function handel(name ){
    alert("book name is "+name);
   }

    return (
    <article className='bookContent'> 
        <img src={img} alt = ' '/>
        <h2>{name}</h2>
        <p>{des} </p>
        <button type='button' onClick={() => handel(name)}>submit</button>
    </article>)
}
export default Book ;