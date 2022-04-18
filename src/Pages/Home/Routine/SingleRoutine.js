import React from 'react';
import './SingleRoutine.css';

const SingleRoutine = ({ singleRoutine }) => {
    const { day, time, img } = singleRoutine;
    return (
        <div className='g-5 col-sm-12 col-md-12 col-lg-4'>
            <div className="card single-routine-card">
                <img src={img} className="card-img-top daily-img" alt="..." />
                <div className="card-body">
                    <div>
                        <h5 className="card-title">Day: {day}</h5>
                        <p className="card-text"><b>Time: </b>{time}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleRoutine;