import React, {useState} from 'react';

const Experience = () => {
    const [tabIndex, setTabIndex] = useState(2);

    let navBar = <div id="experience-list">
        <button className={tabIndex === 2 ? "experience-list-item-selected" : "experience-list-item"} onClick={() => setTabIndex(2)}>
            DSO National Laboratories
        </button>
        <button className={tabIndex === 1 ? "experience-list-item-selected" : "experience-list-item"} onClick={() => setTabIndex (1)}>
            National University of Singapore
        </button>
        <button className={tabIndex === 0 ? "experience-list-item-selected" : "experience-list-item"} onClick={() => setTabIndex (0)}>
            Singapore Armed Forces
        </button>
    </div>
    
    let tabs = <div id="experience-content-container">
        <div className="experience-content" style={tabIndex === 2 ? { display: "flex" } : { display: "none" }}>
            <h3 className="experience-header">DSO National Laboratories</h3>
            <small className="experience-role">Intern</small>
            <small className="experience-date">May 2022 - Present</small>
            <div className="experience-text">
                <p>Designed and developed a reinforcement learning agent in Python.</p>
                <p>Created a simulation environment for the AI agents, including a visualisation system.</p>
            </div>
            <small className="experience-role">Intern</small>
            <small className="experience-date">February 2018 - April 2020</small>
            <div className="experience-text">
                <p>Programmed a C++ algorithm for the extrinsic calibration of a Camera-LiDAR System.</p>
            </div>
        </div>
        <div className="experience-content" style={tabIndex === 1 ? {display: "flex"} : {display: "none"}}> 
            <h3 className="experience-header">National University of Singapore</h3>
            <small className="experience-role">Student Teaching Assistant</small>
            <small className="experience-date">January 2022 - April 2022</small>
            <div className="experience-text">
                <p>Conducted weekly tutorials for CS1010 - Programming Methodology, an introductory module to C.</p>
                <p>Prepared lesson materials and graded coding assignments.</p>
            </div>
        </div>
        <div className="experience-content" style={tabIndex === 0 ? {display: "flex"} : {display: "none"}}> 
            <h3 className="experience-header">Singapore Armed Forces</h3>
            <small className="experience-role">Admin Supervisor & Section Trainer</small>
            <small className="experience-date">April 2018 - April 2020</small>
            <div className="experience-text">
                <p>Conducted lessons for 12 batches of trainees on the responsibilities and requisite technical knowledge of an admin support assistant.</p>
                <p>Managed administrative work at the company level, including management of personal data and consolidation of course results.</p>
                <p>Coordinated the implementation of an online platform to support the conduct of the course.</p>
                <p>Received the MINDEF Service Excellence Award for Q1 2020.</p>
            </div>
        </div>
    </div>;

    return (
        <div id="experience" className="section-container">
            <h2>Experience</h2>
            <hr/>
            <div id="experience-container">
                {navBar}
                {tabs}
            </div>
        </div>
    );
}

export default Experience;