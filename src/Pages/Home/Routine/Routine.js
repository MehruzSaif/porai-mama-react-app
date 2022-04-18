import React from 'react';
import sunrise from '../../../images/sunrise.png';
import sunset from '../../../images/sunset.png';
import moon from '../../../images/moon.png';
import './Routine.css';
import SingleRoutine from './SingleRoutine';

const routine = [
    { id: 1, day: 'Sunday, Tuesday, Thursday', time: '9:00am - 10:30am', img: sunrise },
    { id: 2, day: 'Monday, Wednesday, Saturday', time: '3:00pm - 5:00pm', img: sunset },
    { id: 3, day: 'Sunday, Monday, Wednesday', time: '7:00pm - 8:40pm', img: moon }
]

const Routine = () => {
    return (
        <div className='container'>
            <h1 className='text-center mt-5 daily-routine'>ডেইলি রুটিন</h1>
            <div className="row">
                {
                    routine.map(singleRoutine => <SingleRoutine
                        key={singleRoutine.id}
                        singleRoutine={singleRoutine}
                    ></SingleRoutine>)
                }
            </div>
        </div>
    );
};

export default Routine;