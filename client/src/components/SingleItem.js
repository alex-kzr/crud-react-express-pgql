import React, { Component } from 'react';
import axios from 'axios';
import SingleItemCard from './SingleItemCard';

class SingleItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            user: {}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/api/users/${id}`).then(res => {
            this.setState({
                loading: false,
                user: res.data
            });
        });
    }

    render(){
        if(this.state.loading){
            return(
                <h3>Loading ...</h3>
            );
        }
        return(
            <SingleItemCard fullName={this.state.user.full_name} phone={this.state.user.phone} />
        )
    }
}

export default SingleItem; 