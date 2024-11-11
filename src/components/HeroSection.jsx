// Import all of Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assests/images/icon.png'
import man from '../assests/images/man.png'
import tiger from '../assests/images/tiger_2.png'
import './HeroSection.css'
import githubImage from '../assests/images/github.svg';
import instagramImage from '../assests/images/instagram.svg';
import linkedinImage from '../assests/images/linkedin.svg';
function HeroSection() {
    return (
        <section className="hero_section">
            <div className="name_container">
                <span>
                    <img src={image} className="name_astrisk_image" alt="image" />
                    <div className="designation_name">Full Stack Engineer</div>
                </span>
                <h1 className="dev_name">Hello! I'm</h1>
                <h1 className='dev_name'>Shubham Mishra</h1>
                <p className='introduction_text'>Skilled and results-driven Software Engineer with 4 years of hands-on experience specializing in backend development. Proficient in designing, implementing, and optimizing scalable backend systems for diverse applications.</p>
                <span className="button_container">
                    <div className="lets_connect">Let's Connect</div>
                    <div className="view_projects">View projects</div>
                </span>

                <span className="social_container">
                    <div className="checkout_text">Check out my</div>
                    <div className="hr_line"></div>
                    <hr />
                    <div className="social_icon linkedin"><img src={linkedinImage} alt="image" /></div>
                    <div className="social_icon github"><img src={githubImage} alt="image" /></div>
                    <div className="social_icon instagram"><img src={instagramImage} alt="image" /></div>
                </span>


            </div >
            <div className="image_container">
                <img className="man_image" src={tiger} alt="image" />
            </div>

        </section >
    );
}

export default HeroSection