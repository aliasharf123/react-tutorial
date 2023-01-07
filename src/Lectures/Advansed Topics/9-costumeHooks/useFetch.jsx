import { useCallback } from 'react';
import { useState, useEffect } from 'react';

//made costume hooks 
//you should start with `use` 
// then you can use it everywhere


// WARNING in [eslint]
// src\Lectures\Advansed Topics\9-costumeHooks\useFetch.jsx
// Line 20:8:  React Hook useEffect has a missing dependency: 'getProducts'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
// to solve this warning use callbacks


function useFetch(url) {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
  
    const getProducts =useCallback( async () => {
      const response = await fetch(url)
      const products = await response.json()
      setProducts(products)
      setLoading(false)
    }, [url])
    // if we add getProducts without callbacks it will give a infinte loop so usecallbacks 
    useEffect(() => {
      getProducts()
    }, [url , getProducts])
    return({loading ,products})
}

export default useFetch;