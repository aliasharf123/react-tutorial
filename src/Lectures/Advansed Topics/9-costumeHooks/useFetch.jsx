import { useState, useEffect } from 'react';

//made costume hooks 
//you should start with `use` 
// then you can use it everywhere

function useFetch(url) {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
  
    const getProducts = async () => {
      const response = await fetch(url)
      const products = await response.json()
      setProducts(products)
      setLoading(false)
    }
  
    useEffect(() => {
      getProducts()
    }, [url])
    return({loading ,products})
}

export default useFetch;