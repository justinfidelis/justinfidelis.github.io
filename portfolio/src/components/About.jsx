import React from 'react';

const About = () => {
    return (
        <div id="about" className="section-container">
            <h2>About</h2>
            <hr/>
            <div className="about-container">
                <div id="about-text-container">
                    <div className="section-text">
                        <p> Hello! My name is Justin and I am currently a Year 3 computer engineering student at the National University of Singapore. </p>
                        <p> I have an interest in Artificial Intelligence, Machine Learning and Computer Vision. </p>
                    </div>
                </div>
                <div id="about-image-container">
                    <img className="about-image" src="self-pic.jpg" alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default About;