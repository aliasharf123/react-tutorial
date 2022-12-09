import React from 'react';

function Review(probs) {
    return ( 
    <article className='reveiw'>
        <div className='img-container'>
            <img  src={probs.reviewer.image} alt="" srcset="" />
            <span className="quote-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg></span>
        </div>
        <footer>
            <h5>{probs.reviewer.name}</h5>
            <h6 style={{ color : "hsl(205, 78%, 60%)"}}>{probs.reviewer.job}</h6>
            <p>{probs.reviewer.text}</p>
            <div>
                <button className='nextLeft' onClick={() => probs.goLeft(probs.reviewer.id)}><svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
						</svg></button>
                <button className='nextRight'  onClick={() => probs.goRight(probs.reviewer.id - 1)}><svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
						</svg></button>
            </div>
            <button className='surpiseme' onClick={() => probs.Surpriseme(0, 4,probs.reviewer.id)}>Surprise me</button>
        </footer>
    </article> );
}

export default Review;
