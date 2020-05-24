import React from 'react';

const SingleItemCardElements = ({fullName, phone, onEdit}) => {
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
                    <button className="btn btn-outline-danger mr-4">Delete</button>
                    <button className="btn btn-outline-dark" onClick={onEdit}>Edit</button>
                </div>
            </div>
        </div>
    );
}

export default SingleItemCardElements;