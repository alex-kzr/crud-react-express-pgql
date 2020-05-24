import React from 'react';

const ItemListElement = ({fullName, phone}) => {
    return(
        <li className="list-group-item mt-3">
            {fullName} | {phone}
        </li>
    );
}

export default ItemListElement;