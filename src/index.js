import React from 'react';
import {createRoot} from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css'
import Index from './projects/Advansed projects/Movies DB';
import '../src/projects/Advansed projects/Movies DB/movies.css'
function Final() {
    return ( 
        <React.Fragment>
            <Index/>
        </React.Fragment>
     );
}
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
        <React.StrictMode>
             <Final/>
        </React.StrictMode>
);
