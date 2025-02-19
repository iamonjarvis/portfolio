const Contact = () => {
    return ( 
        <div className="contact-wrapper">
            <div className="contact">
                <h2 className="title">~ contact</h2>
                <div className='contact-texts'>
                    <span className="main-title" style={{fontWeight: '700'}}>contact me!</span>
                    <span className='subtitle' style={{fontSize: '27px'}}>Let's <span className="orange">create</span> something together.</span>
                    <div className='contact-button'>
                        <a style={{fontWeight: '700'}} href="mailto:sahilp123456@gmail.com?subject=Let's create something together!&body=Hi, I visited your portfolio website and I want to contact you.">Reach me!</a>
                    </div>
                    <div className="contact-button-background"></div>

                    {/* New button to download resume */}
                    <div className="download-resume-button">
                        <a href="https://drive.google.com/file/d/1PT-WjJ3kyA3_V9vVrMZYuVw7DqeDuICH/" download="Sahil_Resume" className="download-link">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
