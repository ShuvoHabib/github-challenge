import React from 'react';
import {
    Link
} from 'react-router-dom';
import './App.css';

const Nav = () => (
    <div>
        <h2>Nav</h2>
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">GitHub Challenge</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
                    <ul className="nav navbar-nav">
                        <li><Link to="/battle">Battle</Link></li>
                        <li><Link to="/popular">Popular</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default Nav;