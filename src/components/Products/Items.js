import React from 'react';
import './Items.css';

const item = (props) => {
    return (
        <div className="Container">
            <h1 className="Open-sans-header">{props.title}</h1>
            <p className="Playfair-body">{props.price}</p>
            <p className="Playfair-body">{props.description}</p>
            <h2 className="Testimonial-header">{props.testimonial}</h2>
            <p className="Testimonial-name">{props.name}</p>         
        </div>
    )
}

export default item;