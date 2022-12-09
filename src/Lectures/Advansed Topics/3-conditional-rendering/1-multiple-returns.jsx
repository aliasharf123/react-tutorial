import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/mojombo'
function MutltipleRetyrn() {
    const [IsLoading , setIsLoading] = useState(true);
    const [IsError , setIsError] = useState(false)
    const [user ,setUser] = useState("user")

    useEffect(() =>{
        fetch(url)
        .then((resp) =>{
            if(resp.status >= 200 && resp.status <= 299){
               return resp.json()
            }
            else{
                setIsError(true);
                setIsLoading(false);
                throw new Error(resp.statusText);
            }
        })
        .then((user) => {
            setUser(user.login)
            setIsLoading(false)
        })
        .catch((error) => console.log(error));

    } , [])

    if (IsLoading){
        return <h2>Loading..</h2>
    }
    if (IsError){
        return <h2>Error..</h2>
    }

    return ( 
        <div>
            <h2>{user}</h2>
        </div> 
    );
}

export default MutltipleRetyrn;