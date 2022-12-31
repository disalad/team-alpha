import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-title">Get In Touch</div>
                <div className="footer-content">
                    <p className="footer-content__about">
                        We're currently looking for more open source project ideas and
                        more developers who can work with us. If you have an idea or you
                        wanna work with us, if you have any questions, or if you just want
                        to say hi, please feel free to contact us via{' '}
                        <a
                            href="https://t.me/AlphaTm_Botz_chat"
                            className="footer-content__email link"
                        >
                            telegram
                        </a>
                        .
                    </p>
                    <div className="footer-developer-info">
                        Developed by{' '}
                        <a
                            href="https://github.com/disalad"
                            className="footer-developer-info__link link"
                        >
                            Disala Yuthmira
                        </a>{' '}
                        using{' '}
                        <a href="https://reactjs.org" className="link">
                            <FontAwesomeIcon icon={faReact} />
                        </a>
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
