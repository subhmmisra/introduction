
import image from '../assests/images/icon.png'
import './LatestProject.css'


function LatestProjects() {
    return (
        <div className="latest_projects_container">
            <span>
                <img src={image} className="talk_astrisk_image" alt="image" />
                <div className="lets_talk_text">LATEST PROJECTS</div>
            </span>
            <div className="projects_heading_container">
                <div className="projects latest_projects_title">Take A Look At <br /> My Latest Projects</div>
                <div className="projects latest_projects_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                </div>
            </div>
            <div className="latest_project_card_container">
                <div className="latest_project_card">
                    <div className="project_title_container">
                        <div className="project_title">Web Design</div>
                        <div className="read_more">Read More</div>
                    </div>
                    <div className="project_image"></div>
                </div>
                <div className="latest_project_card">
                    <div className="project_title">Project Title</div>
                    <div className="project_image"></div>
                    <div className="read_more">Read More</div>
                </div>
            </div>
        </div>
    );
}
export default LatestProjects