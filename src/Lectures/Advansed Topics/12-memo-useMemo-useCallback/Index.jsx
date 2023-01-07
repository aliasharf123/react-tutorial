import React, { useState, useEffect,useCallback ,useMemo} from 'react';
import useFetch from '../9-costumeHooks/useFetch';
import '../lectures.css'
const url = 'https://course-api.com/javascript-store-products'


//0- every time you click count button every compount will rerender 

// memo : deal if probs change or not
// useCallbacks : React's useCallback Hook can be used to optimize the rendering behavior of your React function components.
// useMemo is used to memoize values


// 2- every time you click count button every compount will rerender and log hello 
const calculateMostExpensive = (data)=>{
    console.log('hello');
    return(
        data.reduce((total , item) => {
            const price = item.fields.price;
            if(price >= total){
                total = price
            }
            return total ; 
        }, 0) / 100
    );
}; 
const Index = () => {
    const { products } = useFetch(url)
    const [count, setCount] = useState(0)
    const [cart , setCart] = useState(0)

    // solution of problem 1 is to add callback which will create function if cart change only
    const addToCart =useCallback( ()=>{
        setCart(cart + 1)
    }, [cart]); // add dependaincy of cart to create function if cart change only

    // solution of (2):  (useMemo) to memorize a value and doesnt create function agin only if (data) change
    const MostExpensive = useMemo(() => calculateMostExpensive(products) , [products])

    return (
      <>
        <h1>Count : {count}</h1>
        <button className='btn' onClick={() => setCount(count + 1)}>
          click me
        </button>
        <h1>cart : {cart}</h1>  
        <h1>most Expansive value : ${MostExpensive}</h1>
        <BigList products={products} addToCart = {addToCart}/>
      </>
    )
  }

  //1- memo will cheack if there is any change in probs if not so it will rerender the compount 
  //1- problem when add addToCart because every time click in count button will rerender due to change in addToCart function 
  const BigList = React.memo(({ products , addToCart }) => {
    useEffect(()=>{
        console.log("bg la aaa");
    })
    return (
      <section className='products'>
        {products.map((product) => {
          return <SingleProduct key={product.id} {...product} addToCart = {addToCart}></SingleProduct>
        })}
      </section>
    )
  })
  
  const SingleProduct = ({ fields , addToCart }) => {
    let { name, price } = fields
    price = price / 100
    const image = fields.image[0].url
    useEffect(()=>{
        console.count("singel item added");
    })
    return (
      <article className='product'>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>${price}</p>
        <button onClick={addToCart}>add to cart</button>
      </article>
    )
  }
export default Index;