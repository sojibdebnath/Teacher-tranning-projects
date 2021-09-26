import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    const { img, name, balance, email, age, phone } = props.teacher || {};

    // console.log(props.teacher);
    return (
        <div className="col-md-4">
            <div className="card m-2" style={{
                "width": "18rem"
            }}>
                <div className="card-image">
                    <img src={img} className="card-img-top " alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Email: {email}</p>
                    <p className="card-text">Age: {age}</p>
                    <h5 className="card-text">Sallary: ${balance}</h5>
                    <p className="card-text">Phone: {phone}</p>
                    <div className="d-flex justify-content-center "><h4 onClick={() => props.handleAddTeacher(props.teacher)} className="btn btn-primary"><i class="fas fa-cart-plus text-warning"></i> Add To Total</h4></div>
                </div>
            </div >
        </div>
    );
};

export default Teacher;