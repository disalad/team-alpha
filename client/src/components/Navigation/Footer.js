import './footer.scss';

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-title">Get In Touch</div>
                <div className="footer-content">
                    <p className="footer-content__about">
                        We're currently looking for full-time Software Engineering or
                        Machine Learning opportunities! If you know of any positions
                        available, if you have any questions, or if you just want to say
                        hi, please feel free to email me at,{' '}
                        <a
                            href="mailto:ponnagishan@gmail.com"
                            className="footer-content__email link"
                        >
                            example@example.com
                        </a>
                        .
                    </p>
                    <div className="footer-developer-info">
                        Developed by{' '}
                        <a
                            href="https://github.com/disalad"
                            className="footer-developer-info__link link"
                        >
                            Disala Damsas
                        </a>{' '}
                        using <a href="https://reactjs.org" className="link">React</a>
                    </div>
                    <p className="footer-content-end">
                        Project code is open source. Feel free to fork and make your own
                        version.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
