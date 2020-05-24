import React, { Component } from 'react';

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
        return(
            <div>SingleItemCard</div>
        );
    }
}

export default SingleItemCard;