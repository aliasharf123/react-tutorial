import React , {useState}from 'react';

function Tours({tours, remove}) {
    const [readmore , setReadmore] = useState(false);

    return ( 
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="underline"></div>
            </div>
            <div >
                {tours.map((tour) =>{
                    return( 
                        <article key={tour.id} className="single-tour">
                            <div >
                                <img src={tour.image} alt="" srcset="" />
                            </div>
                            <footer>

                            <div className="tour-info">
                                <h4>{tour.name}</h4>
                                <h4 className="tour-price">${tour.price}</h4>
                            </div>
                            <div>
                                <p>{readmore ? tour.info : tour.info.substring(0,200)}...
                                <button onClick={() => setReadmore(!readmore)}>{readmore ? "Show less" : "read more"}</button>
                                </p>
                            </div>
                            <div>
                                <button   className="delete-btn" onClick={() => remove(tour.id)}>Not Interseted</button>
                            </div>
                        </footer>
                    </article>
                    );
                })}
            </div>
        </section>
    );
}

export default Tours;