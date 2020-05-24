import React from 'react';

const ItemListElement = ({text}) => {
    return(
        <li className="list-group-item">
            {text}
        </li>
    );
}

export default ItemListElement;