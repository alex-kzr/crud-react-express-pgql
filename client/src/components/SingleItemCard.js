import React, { Component } from 'react';
import SingleItemCardElements from './SingleItemCardElements';
import EditItem from './EditItem';

class SingleItemCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            fullName: props.fullName,
            phone: props.phone
        };
        this.onEdit = this.onEdit.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    onEdit(){
        this.setState({
            editing: !this.state.editing
        });
    }

    updateState(fullName, phone){
        this.setState({
            fullName: fullName,
            phone: phone
        });
    }

    render(){
        const {fullName, phone} = this.state;
        if(this.state.editing){
            return(
                <EditItem fullName = {fullName} phone={phone} toggleEdit={this.onEdit} id={this.props.id} updateState={this.updateState}/>
            );
        }
        return(
            <SingleItemCardElements fullName={fullName} phone={phone} onEdit={this.onEdit}/>
        );
    }
}

export default SingleItemCard;