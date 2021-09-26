import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#">Tranning</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Trainer</a>
                            </li>

                        </ul>
                        <form className="d-flex flex-fill mx-5">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="my-2 mx-5 bg-primary p-3 rounded-3">
                <h2 className="text-center">Teacher Tranning Project</h2>
                <h2 className=" text-center">Total buget:200 million</h2>
            </div>
        </div>
    );
};

export default Header;