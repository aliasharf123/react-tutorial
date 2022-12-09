import React, { useState , useContext} from 'react';

const AppContext = React.createContext(null);

function AppProvider({children}) {
    const [showModal , setShowModal] = useState(false);
    const [showSide , setShowSide] = useState(false);

    const openModel = () =>{
        setShowModal(true);
    }
    const closeModel = () =>{
        setShowModal(false);
    }
    const openSide = () =>{
        setShowSide(true);
    }
    const closeSide = () =>{
        setShowSide(false);
    }

    return ( 
        <AppContext.Provider value = {{
            openModel,
            openSide,
            closeSide,
            closeModel,
            showModal,
            showSide
        }}>
            {children}
        </AppContext.Provider> 
    );
}

export const GlobalContext  = () =>{
    return(useContext(AppContext))
}

export default AppProvider;