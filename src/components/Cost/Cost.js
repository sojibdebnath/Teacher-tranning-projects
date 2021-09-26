import React from 'react';
import './Cost.css';

const Cost = (props) => {
    const { cost } = props || {}

    const totalReducer = (prevValue, currentValue) => prevValue + parseFloat(currentValue.balance);

    const total = cost.reduce(totalReducer, 0).toFixed(2);


    return (
        <div className="m-4">
            <h4><i className="fas fa-shopping-cart"></i>Teacher Add: {cost.length}</h4>

            <h5>Total Cost: ${total}</h5>

            <ul>
                {
                    cost.map(teacher => <li>{teacher.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cost;