import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const socialMediaIcons = () => (
    <div className="socialMediaContainer">
        <a href="https://github.com/aldjonz">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        {/* <a href="/">
            <FontAwesomeIcon icon={faLinkedin} />
        </a> */}
    </div>
);

export default socialMediaIcons;