import React from 'react';

import './Card.style.css';

export const Card = (props) => {
    return(
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/BE${props.monster.id}.png?set=set2&size=180x180`} />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}
