import React , { useContext , useState} from 'react';
import useFetch from './UseFetch'
const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png';
// you should get apiKey 
const AppContext = React.createContext();

function AppProvider({children}) {
    const [query , setQuery] = useState('batman');
    const { isLoading, isError, data: movies } = useFetch(`&S=${query}`);
    return ( 
        <AppContext.Provider value={{isLoading , isError , query , setQuery , movies}} >
            {children}
        </AppContext.Provider> 
    );
}
export const GlobalContext = () =>{
    return(useContext(AppContext));
}
export default AppProvider;