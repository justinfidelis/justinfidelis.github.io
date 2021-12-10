import React from 'react';
import EmailLogo from './EmailLogo.jsx';
import GitHubLogo from './GitHubLogo.jsx';
import LinkedInLogo from './LinkedInLogo.jsx';


const Contact = () => {
    return (
        <div id="contact" className="section-container">
            <h2>Contact</h2>
            <hr/>
            <div id="contact-container">
                <GitHubLogo />
                <EmailLogo />
                <LinkedInLogo />
            </div>
        </div>
    );
}

export default Contact;