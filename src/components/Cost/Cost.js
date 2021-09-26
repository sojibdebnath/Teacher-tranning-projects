import React from 'react';
import './Cost.css';

const Cost = (props) => {
    const { cost } = props || {}

    const totalReducer = (prevValue, currentValue) => prevValue + parseFloat(currentValue.balance);

    const total = cost.reduce(totalReducer, 0).toFixed(2);


    return (
        <div className="m-4">
            <h4><span className="text-color"><i className="fas fa-user"></i>Teacher Added:</span> <span className="text-color2">{cost.length}</span></h4>

            <h5><span className="text-color">Total Cost:</span> <span className="text-color2">${total}</span></h5>

            <ul>
                {
                    cost.map(teacher => <li>{teacher.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cost;