import React from 'react';
import ProbTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

// you will get error because missing argument
// you can use either short circuts or default prob

function Product({name ,price ,image}) {
    const url = image && image.url ;
    return ( 
        <div  className='product'>
            <img src={url || defaultImage} alt={name || "Default name"} />
            <h4>{name || "Default name"}</h4>
            <p>{price || 3.99}</p>
        </div>
     );
}

Product.ProbTypes = {
    image: ProbTypes.object.isRequired,
    name: ProbTypes.string.isRequired,
    price: ProbTypes.number.isRequired
};
// another way
Product.defaultProps ={ 
    name: 'default name',
    price: 3.99,
    image: defaultImage   
}



export default Product;