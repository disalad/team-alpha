import './aboutUs.scss';

function AboutUs() {
    return (
        <section id="about">
            <div className="about-container">
                <div className="row">
                    <div className="about-img">
                        <img
                            src={require('../../assets/images/conifer-weather-forecast.png')}
                            alt="About"
                        />
                    </div>
                    <div className="about-content">
                        <h1 className="about-content__title">About Us</h1>
                        <p className="about-content__description">
                            We are Team Alpha. Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Porro alias dignissimos fuga possimus ipsam
                            excepturi velit exercitationem quibusdam explicabo nulla id
                            adipisci, illum suscipit nam ab amet non odit consequuntur.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Magnam, iure! Lorem ipsum dolor sit amet.
                        </p>
                        <p className="contact">
                            <a href="https://t.me/imGishan" className="contact-btn">
                                Contact Us
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
