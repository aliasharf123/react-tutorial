import React from 'react';
import Book from './book'
import { books } from './books';

function Library(){
    return(
        <section className='book'>
            <h1>Weka Library</h1>
        <div>
            {books.map((book) => {
                return(
                    <Book  book = {book} key = { book.id}> </Book>
                );
             })}
        </div>
        </section>
    )
}
export default Library ; 