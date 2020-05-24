import React from 'react';

const SingleItemCardElements = ({fullName, phone}) => {
    return(
        <div className={'card bg-light'}>
            <div className="card-block">
                <div className="card-title">
                    <h4>{fullName}</h4>
                </div>
                <div className="card-text">
                    {phone}
                </div>
            </div>
        </div>
    );
}

export default SingleItemCardElements;