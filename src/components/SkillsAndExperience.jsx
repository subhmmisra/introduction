import image from '../assests/images/icon.png';
import './SkillsAndExperience.css';

function SkillsAndExperience() {
    return (
        <div className="skills_and_experience_container">
            <span>
                <img src={image} className="talk_astrisk_image" alt="image" />
                <div className="lets_talk_text">Skills / Experience</div>
            </span>
            <div className="skills_and_experience_heading">Check My Skills and Work Experiences</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua</p>
            <div className="experience_container">
                <div className="experience_box">
                    <div className='education_detail_container'>
                        <div className='education_heading'>Work Experiences</div>
                        <hr className='experience_hr' />

                        <div className='year year_1'>June' 2022 - Dec' 2023</div>
                        <div className='profile profile_1'>Sr. Software Developer</div>
                        <div className='company company_1'>Nickelfox Technologies</div>

                        <div className='year year_2'>Jan' 2022 -  Apr' 2022</div>
                        <div className='profile profile_1'>Sr. Software Engineer</div>
                        <div className='company company_1'>Navtech</div>

                        <div className='year year_3'> July' 2021 - Dec' 2021</div>
                        <div className='profile profile_1'>Software Engineer</div>
                        <div className='company company_1'>Integrichain</div>

                        {/* <div className='year year_3'>Jun' 2019 - Mar' 2021</div>
                        <div className='profile profile_1'>Software Developer</div>
                        <div className='company company_1'>Primedigital Global</div> */}
                    </div>
                    <div className="experience_detail_container">
                        <div className="experience_heading">Education</div>
                        <hr className='experience_hr' />

                        <div className='year year_1'>July' 2015 - Jan' 2019</div>
                        <div className='profile profile_1'>Jaypee JUET</div>
                        <div className='company company_1'>- Guna</div>
                    </div>


                </div>
                <div className="skills_box">
                    <div className="skills_heading">My Skills & Advantage</div>
                    <div className="skills_bar_container">
                        <div className="skill_name_container">
                            <div className="bar name">Python</div>
                            <div className="bar percentage">95%</div>
                        </div>
                        <div className="base_bar">
                            <div className='bar_status python'></div>
                        </div>
                        <div className="skill_name_container">
                            <div className="bar name">Django / DRF</div>
                            <div className="bar percentage">90%</div>
                        </div>
                        <div className="base_bar">
                            <div className='bar_status django'></div>
                        </div>
                        <div className="skill_name_container">
                            <div className="bar name">Javascript</div>
                            <div className="bar percentage">90%</div>
                        </div>
                        <div className="base_bar">
                            <div className='bar_status django'></div>
                        </div>
                        <div className="skill_name_container">
                            <div className="bar name">React</div>
                            <div className="bar percentage">65%</div>
                        </div>
                        <div className="base_bar">
                            <div className='bar_status react'></div>
                        </div>
                        <div className="skill_name_container">
                            <div className="bar">Databases</div>
                            <div className="bar percentage">90%</div>
                        </div>
                        <div className="base_bar">
                            <div className='bar_status databases'></div>
                        </div>
                        <div className="skill_name_container">
                            <div className="bar name">AWS</div>
                            <div className="bar percentage">85%</div>
                        </div>
                        <div className="base_bar">
                            <div className='bar_status aws'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SkillsAndExperience;