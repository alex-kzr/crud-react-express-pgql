import React, { Component } from 'react';
import ItemsList from './ItemsList';
import ItemListElement from './ItemListElement';
import axios from 'axios';

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
            console.log(res);
            this.setState({
                loading: false,
                users: res.data
            });
        }).catch(err => {
            console.log(err);
        })
    }
    
    
    render(){
        if(this.state.loading === true){
            return(
                <h2>loading ...</h2>
            );
        }
        return(
            <ItemsList>
                <ItemListElement text={'Item list atlast!'} />
            </ItemsList>
        );
    }    
}

export default ItemsBody;