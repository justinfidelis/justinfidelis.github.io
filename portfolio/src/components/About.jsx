import React from 'react';

const About = () => {
    return (
        <div id="about" className="section-container">
            <h2>About</h2>
            <hr/>
            <div className="about-container">
                <div id="about-text-container">
                    <div className="section-text">
                        Hello! My name is Justin and I am currently a Year 2 computer engineering student at the National University of Singapore. 
                        <br/> <br/>
                        I am also pursuing a specialisation in Internet of Things (IoT) and have an interest in Artificial Intelligence, Computer Vision and Computer Networking.
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