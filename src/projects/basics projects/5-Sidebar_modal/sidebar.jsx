import React from 'react';
import {GlobalContext} from './context'
import logo from './logo.png'
import {FaTimes} from 'react-icons/fa'
import {sites , soical} from './data'
function SideBar() {
    const context = GlobalContext();
    console.log(context.showSide)
    return ( 
        <aside className= {context.showSide ? "sidebar show" : "sidebar"}>
            <div >
                <img src={logo} alt="logo" className='logo'/>   
                <button className='cloeSidebar' onClick={() => context.closeSide()}>
                    <FaTimes/>
                </button>
            </div>
            <ul className='sites list-unstyled'>
                {sites.map((site) =>{
                    return(
                        <li>    
                            <site.Icon/>
                            <a href={site.url} style={{
                                marginLeft:"20px"
                            }}>{site.name}</a>
                        </li>
                    )
                })}
            </ul>
            <div className='social'>
                {soical.map((Element) =>{
                    return(<Element/>)
                })}
            </div>
        </aside> 
    );
}

export default SideBar;