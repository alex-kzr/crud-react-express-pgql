import React, { Component } from 'react';
import axios from 'axios';

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
        console.log(this.state.user);
        if(this.state.loading){
            return(
                <h3>Loading ...</h3>
            );
        }
        return(
            <p>SingleItemCard</p>
        )
    }
}

export default SingleItem; 