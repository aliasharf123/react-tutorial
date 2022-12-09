import React, { useState, useEffect } from 'react';

const url ="https://api.github.com/users"
//import './index.css'

function UseEffectFetchData() {
    const[users , setUsers] = useState([])
    
    const getUsers = async () =>{
    const response = await fetch(url);
    const users = await response.json()   
    setUsers(users)
    } 
    useEffect(() =>{
        getUsers()
    }, [] ) // to dont make infinte loop

    return ( 
    <div className='container' style={{
        width : "55%"
    }}>
    <h2 className='text-center'>Github users</h2>
    <ul className='list-group' >{users.map((user) =>{
        const {id , avatar_url ,login, html_url} = user
        return(  
            <li className='list-group-item' style={{
                margin: "10px",
                borderTop : "solid  rgba(0, 0, 0, 0.125) 1px " 
            }} key={id}> 
                <img src={avatar_url} className="images-person"  alt="login" />
                <div>
                    <h3>{login}</h3>
                    <a href={html_url} style ={{
                        color: "gray",
                        textDecorationLine : "none"
                    }}><p> profile</p></a>
                </div>
            </li>
         );
    })}</ul>
    </div> );
}

export default UseEffectFetchData;