import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    const { img, name, balance, email, age, phone } = props.teacher || {};

    return (
        // card design
        <div className="col-md-4">
            <div className="card m-2 card-bg" style={{
                "width": "18rem"
            }}>
                <div className="card-image">
                    <img src={img} className="card-img-top " alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-danger">Name: <span className="text-warning">{name}</span></h5>
                    <h6 className="card-text">Email: {email}</h6>
                    <h6 className="card-text">Age: {age}</h6>
                    <h5 className="card-text">Sallary: ${balance}</h5>
                    <h6 className="card-text">Phone: {phone}</h6>
                    <div className="d-flex justify-content-center "><h4 onClick={() => props.handleAddTeacher(props.teacher)} className="btn btn-primary"><i className="fas fa-cart-plus text-warning"></i> Add To Cart</h4></div>
                </div>
            </div >
        </div>
    );
};

export default Teacher;