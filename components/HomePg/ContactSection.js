import styles from '../../styles/Contact.module.css';
import SocialMedia from '../UI/socialMediaIcons';

const ContactSection = () => {

    return (
        <div className={styles.contact}>
            <div className={styles.contactText}  data-aos="zoom-out-right">
                <h2>Get in Touch</h2>
                <p>Feel free to contact me for any any queries or just to connect!</p>
                <a>support@aledjones.dev</a>
                <SocialMedia />
            </div>
        </div>
    );
};

export default ContactSection;