import React from 'react';

const item = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default item;