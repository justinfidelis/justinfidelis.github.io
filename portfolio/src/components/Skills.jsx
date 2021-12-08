import React from 'react';

const Skills = () => {
    return (
        <div id="skills" className="section-container">
            <h2>Skills</h2>
            <hr/>
            <div className="skills-container">
                <div className="skills-card">
                    <h3 className="card-title">Programming Languages</h3>
                    <hr className="card-break" />
                    <ul className="skills-list">
                        <li className="skills-list-item">C</li>
                        <li className="skills-list-item">C++</li>
                        <li className="skills-list-item">Java</li>
                        <li className="skills-list-item">Python</li>
                        <li className="skills-list-item">HTML + CSS + JS</li>
                    </ul>
                </div>
                <div className="skills-card">
                    <h3 className="card-title">Database Management</h3>
                    <hr className="card-break" />
                    <ul className="skills-list">
                        <li className="skills-list-item">PostgreSQL</li>
                        <li className="skills-list-item">MySQL</li>
                    </ul>
                </div>
                <div className="skills-card">
                    <h3 className="card-title">Hardware Technologies</h3>
                    <hr className="card-break" />
                    <ul className="skills-list">
                        <li className="skills-list-item">Verilog</li>
                        <li className="skills-list-item">Arduino</li>
                        <li className="skills-list-item">ARM</li>
                        <li className="skills-list-item">ROS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;