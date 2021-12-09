import React, {useState} from 'react';

const Experience = () => {
    const [tabIndex, setTabIndex] = useState(0);

    let navBar = <div id="experience-list">
        <button className={tabIndex === 0 ? "experience-list-item-selected" : "experience-list-item"} onClick={() => setTabIndex (0)}>
            Singapore Armed Forces
        </button>
        <button className={tabIndex === 1 ? "experience-list-item-selected" : "experience-list-item"} onClick={() => setTabIndex (1)}>
            DSO National Laboratories
        </button>
    </div>
    
    let tabs = <div id="experience-content-container">
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
        <div className="experience-content" style={tabIndex === 1 ? {display: "flex"} : {display: "none"}}> 
            <h3 className="experience-header">DSO National Laboratories</h3>
            <small className="experience-role">Intern</small>
            <small className="experience-date">Feb 2018 - April 2020</small>
            <div className="experience-text">
                <p>Programmed a C++ algorithm for the extrinsic calibration of a Camera-LiDAR System.</p>
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