import React from 'react';
import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import Matraial from './projects/Advansed projects/project 2/matrial';


function Final() {
    return ( <Matraial/>);
}
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Final/>);
