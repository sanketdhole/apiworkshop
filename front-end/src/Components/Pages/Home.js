import React from 'react';
import './Home.css';
import Button from '../Button';

function Home() {
    return (
        <>
            <div className="container">
                <div className="rectuiter col">
                    <h2>For Recruiter</h2>
                    <p>Find your some of best employees here !</p>
                    <Button type="submit" link="/recruiter-login">Let's See</Button>
                </div>
                <div className="user col">
                    <h2>For Aspirants</h2>
                    <p>Find your best opportunities !</p>
                    <Button type="submit" link="/user-login">Let's Find</Button>
                </div>
            </div>
        </>
    )
}

export default Home;