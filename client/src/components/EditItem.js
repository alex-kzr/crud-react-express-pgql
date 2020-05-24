import React, { Component } from 'react';

class EditItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            fullName: props.fullName || '',
            phone: props.phone || ''
        };
        this.onChangeItem = this.onChangeItem.bind(this);
    }

    onChangeItem(event){
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    render(){
        const { fullName, phone } = this.state;
        return (
            <form>
                <div className="form-group">
                    <label hrmlFor="fullName">Full name</label>
                    <input name="fullName" type="text" className="form-control" id="fullName" value={fullName} onChange={this.onChangeItem}/>
                </div>
                <div className="form-group">
                    <label hrmlFor="phone">Phone</label>
                    <input name="phone" type="text" className="form-control" id="phone" value={phone} onChange={this.onChangeItem}/>
                </div>                      
                <div className="d-flex justify-content-start align-items-center mt-5">
                    <button type="button" className="btn btn-outline-danger mr-4" onClick={this.props.onCancel}>Cancel</button>
                    <button type="submit" className="btn btn-outline-dark">Submit</button>
                </div>                
            </form>
        );
    }
}

export default EditItem;