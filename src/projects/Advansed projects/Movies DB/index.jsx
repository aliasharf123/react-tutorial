import React ,{ useContext }from 'react';
import AppContext from './context';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Navbar from './Navbar';
import SingleMovie from './Movie';
import Movies from './Movies';
import Error from './Error'

function Index() {

    return ( 
        <AppContext>
             <Router>
                <Routes>
                <Route  path='/' element={<Movies/>}/>
                <Route path='/movie/:id' element={<SingleMovie/>}/>
                <Route path='*' element={<Error/>}/>
                </Routes>
             </Router>
        </AppContext> 
    );
}

export default Index;