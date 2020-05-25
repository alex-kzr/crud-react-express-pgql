import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class EditItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            fullName: props.fullName || '',
            phone: props.phone || ''
        };
        this.onChangeItem = this.onChangeItem.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeItem(event){
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const { fullName, phone } = this.state;
        const { id, history } = this.props;
        if(id){
            axios.put(`/api/users/${id}`, {
                full_name: fullName,
                phone: phone
            }).then(() => {
                this.props.updateState(fullName, phone);
                this.props.toggleEdit();
            });
        }else{
            axios.post('/api/users', {full_name: fullName, phone: phone}).then(() => {
                history.push('/');
            });
        }
    }

    render(){
        const { fullName, phone } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label hrmlfor="fullName">Full name</label>
                    <input name="fullName" type="text" className="form-control" id="fullName" value={fullName} onChange={this.onChangeItem}/>
                </div>
                <div className="form-group">
                    <label hrmlfor="phone">Phone</label>
                    <input name="phone" type="text" className="form-control" id="phone" value={phone} onChange={this.onChangeItem}/>
                </div>                      
                <div className="d-flex justify-content-start align-items-center mt-5">
                    <button type="button" className="btn btn-outline-danger mr-4" onClick={this.props.toggleEdit}>Cancel</button>
                    <button type="submit" className="btn btn-outline-dark">Submit</button>
                </div>                
            </form>
        );
    }
}

export default withRouter(EditItem);