import React, { useEffect, useState } from 'react';
import Cost from '../Cost/Cost';
import Teacher from '../Teacher/Teacher';
import './Details.css';

const Details = () => {
    const [teachers, setTeachers] = useState([]);

    const [cost, setCost] = useState([]);

    const handleAddTeacher = (teacher) => {
        // console.log(teacher);
        const newCost = [...cost, teacher]
        setCost(newCost);
    }


    useEffect(() => {
        fetch("teachers.json")
            .then(res => res.json())
            .then(data => setTeachers(data))

    }, [])

    return (
        <div className="row mx-3">
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {
                                teachers.map(teacher => <Teacher
                                    teacher={teacher}
                                    handleAddTeacher={handleAddTeacher}
                                >
                                </Teacher>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-md-3 ">
                <Cost
                    cost={cost}
                >

                </Cost>
            </div>
        </div>
    );
};

export default Details;