import "./Footer.css"
import image from '../assests/images/icon.png'
import githubImage from '../assests/images/github.svg';
import instagramImage from '../assests/images/instagram.svg';
import linkedinImage from '../assests/images/linkedin.svg';


function Footer() {
    return (
        <div className="footer">
            <div className="footer_conainer">
                <span>
                    <img src={image} className="talk_astrisk_image" alt="image" />
                    <div className="lets_talk_text">LET'S WORK TOGETHER</div>
                </span>
                <div className="email_container">connecting.shubham@outlook.com
                </div>
                <hr className="footer_hr" />

                <div className="lower_section">
                    <div className="name_and_intro_container">
                        <div className="name_logo">Shubham Mishra</div>
                        <div className="developer_intro">Skilled and results-driven Software Engineer with 4 years of hands-on experience specializing in backend development. Proficient in designing, implementing, and optimizing scalable backend systems for diverse applications.
                        </div>
                    </div>
                    <div className="quick_links_container">
                        <div className="quick_links_heading">QUICK LINKS</div>
                        <div className="quick_links">Home</div>
                        <div className="quick_links">Services</div>
                        <div className="quick_links">Projects</div>
                        <div className="quick_links">Pages</div>
                        <div className="quick_links">Blog</div>
                        <div className="quick_links">Contacts</div>
                    </div>
                    <div className="contact_container">
                        <div className="contact_heading">CONTACT DETAILS</div>
                        <div className="contact">Varanasi, India</div>
                        <div className="contact">+91-9110057346</div>
                    </div>
                </div>

                <hr className="footer_hr" />

            </div>

        </div>

    );
}
export default Footer