import React from 'react';

const ItemsList = ({children}) => {
    return(
        <ul className="list-group">
            {children}
        </ul>
    );
}

export default ItemsList; 