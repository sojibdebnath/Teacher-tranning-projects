import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            {/* Navber  */}
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="/tranning">Tranning</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/project">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/trainer">Trainer</a>
                            </li>

                        </ul>
                        <form className="d-flex flex-fill mx-5">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* show header details */}
            <div className="my-2 mx-5 bg-primary p-3 rounded-3">
                <h1 className="text-center teacher-tranning"> <span className="text-danger">Teacher</span> Tranning <span className="text-warning">Projects</span></h1>
                <h6 className="text-center">Teachers  are  the  main  link  between  societies' expectations  of  their  educational  systems  and concrete  student  outcomes. </h6>
                <h2 className=" text-center">Total Budget:<span className="fw-bold">200 Million</span></h2>
            </div>
        </div>
    );
};

export default Header;