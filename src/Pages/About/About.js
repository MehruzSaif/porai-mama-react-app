import React from 'react';
import { Card } from 'react-bootstrap';
import ownpic from '../../images/ownpic.png';
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <Card className='my-5 about-card'>
                <Card.Img className='about-img' variant="top" src={ownpic} />
                <Card.Body>
                    <Card.Title className='mb-4 blog-title'>HELLO THERE. I'M <span className='about-name'>MEHRUZ SAIF</span></Card.Title>
                    <Card.Text>
                        A quick and keen but <span className='fakibaj'>ফাঁকিবাজ</span> learner who wants to improve skills as a Full-Stack Web Developer. Highly organized, responsible, outgoing, technology savvy with ideas, adaptable in any scenario, and demonstrated capacity to improve oneself and others. <br />
                        Since enrolling in the Programming Hero Web Development course, I've been creating code every day. Alhumdulillah! I can tell that I'm getting better every day. As if I were performing an assignment alone, I challenge myself with a new skill. Will contribute to open-source projects and will always teach what I know to others. It greatly aids my talent development. I set aside at least 6-8 hours every day for regular downtime, as per my timetable.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;