import React, { Component } from 'react';

class EditItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            fullName: props.fullName || '',
            phone: props.phone || ''
        };
    }

    render(){
        return (
            <form>
                <div>EditItem component</div>
            </form>
        );
    }
}

export default EditItem;