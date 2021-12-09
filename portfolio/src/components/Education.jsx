import React from 'react';

const Education = () => {
    return (
        <div id="education" className="section-container">
            <h2>Education</h2>
            <hr/>
            <div className="section-text">
                <div className="education-container">
                    <h3 className="education-header">National University of Singapore</h3>
                    <small className="education-date">August 2020 - Present (Graduating in May 2024)</small>
                    <div className="education-text">
                        B.Eng. in Computer Engineering, Honours <br/>
                        Specialisation in Internet of Things <br/>
                        Awarded NUS Merit Scholarship <br/>
                        Current CAP: /5.0
                    </div>
                </div>

                <div className="education-container">
                    <h3 className="education-header">NUS High School of Math and Science</h3>
                    <small className="education-date">2012 - 2017</small>
                    <div className="education-text">
                    NUS High School Diploma (High Distinction) <br/> 
                    Honours in Chemistry and Physics, and Major in Mathematics<br/>
                    Graduation CAP: 4.6/5.0
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Education;