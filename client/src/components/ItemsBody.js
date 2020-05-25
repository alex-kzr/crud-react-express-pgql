import React, { Component } from 'react';
import ItemsList from './ItemsList';
import ItemListElement from './ItemListElement';
import axios from 'axios';
import _ from 'lodash';

class ItemsBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            users: {}
        }
    }

    componentDidMount(){
        axios.get('/api/users').then(res => {
            this.setState({
                loading: false,
                users: res.data
            });
        }).catch(err => {
            console.log(err);
        })
    }
    
    renderUsers() {
        return _.map(this.state.users, user => {
            return(
                <ItemListElement fullName={user.full_name} phone={user.phone} id={user.id}/>
            );
        });
    }
    
    render(){
        if(this.state.loading === true){
            return(
                <h2>loading ...</h2>
            );
        }
        return(
            <ItemsList>
                {this.renderUsers()}
            </ItemsList>
        );
    }    
}

export default ItemsBody;