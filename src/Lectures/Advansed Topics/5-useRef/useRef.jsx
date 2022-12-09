import React, { useRef } from 'react';
function UseRef() {
    const RefContainer = useRef(null)
    const handelSubmit = (e) =>{
        e.preventDefault();
        RefContainer.current.style.height = `${RefContainer.current.value}px`
    }
    return ( 
        <>  
            <form onSubmit={handelSubmit}  className ="form">
                <div>
                    <input 
                        ref={RefContainer}
                        type="text"
                    />
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </> 
    );
}

export default UseRef;
