import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return(
        <nav className="navbar navbar-dark bg-dark mb-4">
            <div className="container d-flex justify-content-start">
                <span className="navbar-brand">Users</span>
                <Link to="/new" className="btn btn-outline-light btn-sm">New User</Link>
            </div>
        </nav>
    );
}

export default TopNav;