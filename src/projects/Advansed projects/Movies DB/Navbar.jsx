import React from 'react';
import { GlobalContext } from './context';
import Error from './Error';

function Navbar() {
    const {query , setQuery , isError}  = GlobalContext();
    
    return (
        <nav className='Navabar'>
            <h2>Serch for Movies</h2>
            <form onSubmit={(e) =>{e.preventDefault()}}>
                <div>
                    <input 
                    type="text"
                    value={query}
                    onChange={(e) =>setQuery(e.target.value)}
                    placeholder ="Search for Movies, TV Shows"
                    />                
                </div>
            </form>
            <Error mag={isError.msg}/>
        </nav>
    );
}

export default Navbar;