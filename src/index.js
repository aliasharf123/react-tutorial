import React from 'react';
import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import Index from './Lectures/Advansed Topics/12-memo-useMemo-useCallback/Index';


function Final() {
    return ( <Index/>);
}
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Final/>);
