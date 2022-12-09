import React from 'react';
import AppProvider from './context';
import Home from './Home';
import Modal from './modal';
import SideBar from './sidebar';

function App() {
    return ( 
        <AppProvider>
            <Modal/>
            <Home/>
            <SideBar/>
        </AppProvider> 
    );
}

export default App;