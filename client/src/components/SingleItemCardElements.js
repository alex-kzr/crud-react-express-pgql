import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const SingleItemCardElements = ({fullName, phone, onEdit, id, history}) => {
    return(
        <div className={'card bg-light'}>
            <div className="card-block">
                <div className="card-title">
                    <h4>{fullName}</h4>
                </div>
                <div className="card-text">
                    {phone}
                </div>
                <div className="d-flex justify-content-start ilign-items-end mt-5">
                    <button className="btn btn-outline-danger mr-4" onClick={() => {
                        axios.delete(`/api/users/${id}`).then(() => {
                            history.push('/')
                        });
                    }}>Delete</button>
                    <button className="btn btn-outline-dark" onClick={onEdit}>Edit</button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(SingleItemCardElements);