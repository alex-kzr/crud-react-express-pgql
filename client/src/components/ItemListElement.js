import React from 'react';
import {Link} from 'react-router-dom';

const ItemListElement = ({fullName, phone, id}) => {
    return(
        <Link to={`/${id}`} className="list-group-item text-dark mt-3">
            {fullName} | {phone}
        </Link>
    );
}

export default ItemListElement;