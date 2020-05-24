import React, { Component } from 'react';
import ItemsList from './ItemsList';
import ItemListElement from './ItemListElement';

class ItemsBody extends Component {
    render(){
        return(
            <ItemsList>
                <ItemListElement text={'Item list atlast!'} />
            </ItemsList>
        );
    }    
}

export default ItemsBody;