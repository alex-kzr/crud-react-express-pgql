import React, { Component } from 'react';
import SingleItemCardElements from './SingleItemCardElements';

class SingleItemCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            fullName: props.fullName,
            phone: props.phone
        };
    }

    render(){
        const {fullName, phone} = this.state;
        if(this.state.editing){
            return(
                <h3>Editing ...</h3>
            );
        }
        return(
            <SingleItemCardElements fullName={fullName} phone={phone} />
        );
    }
}

export default SingleItemCard;