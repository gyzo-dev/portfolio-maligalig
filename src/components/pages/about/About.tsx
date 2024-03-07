import React from 'react'
import aboutimage from '../../../assets/3.jpg'
import './About.css'
import cplusplusicon from '../../../assets/devicon_cplusplus.png'
import javaicon from '../../../assets/devicon_java.png'
import kotlinicon from '../../../assets/devicon_kotlin.png'
import darticon from '../../../assets/logos_dart.png'
import reacticon from '../../../assets/devicon_react.png'
import htmlicon from '../../../assets/skill-icons_html.png'
import cssicon from '../../../assets/skill-icons_css.png'
import pythonicon from '../../../assets/devicon_python.png'
import Container from '../../Container'

const About = () => {
    return (
        <Container id="about">
            <div className="about-frame">
                <div className="about-content">
                    <div className="about-left">
                        <div className="blank">

                        </div>
                        <div className="about-image-container">
                            <img src={aboutimage} />
                        </div>
                    </div>
                    <div className="about-right">
                        <div className="about-text">
                            <h2>ABOUT ME</h2>
                            <p>
                                I am Mark Angelo A. Maligalig, a Computer Science student who is passionate about design, solutions and creativity. I aspire to become a web developer, specializing in frontend development and UI/UX design.
                            </p>
                        </div>
                        <div className="about-tech">
                            <div className="subheading">Below are the technologies and languages that I prefer to use:</div>
                            <div className="icons-container">
                                <div className="icon-container">
                                    <img src={cplusplusicon} />
                                </div>
                                <div className="icon-container">
                                    <img src={javaicon} />
                                </div>
                                <div className="icon-container">
                                    <img src={kotlinicon} />
                                </div>
                                <div className="icon-container">
                                    <img src={darticon} />
                                </div>
                                <div className="icon-container">
                                    <img src={reacticon} />
                                </div>
                                <div className="icon-container">
                                    <img src={htmlicon} />
                                </div>
                                <div className="icon-container">
                                    <img src={cssicon} />
                                </div>
                                <div className="icon-container">
                                    <img src={pythonicon} />
                                </div>
                            </div>
                        </div>
                        <div className="about-button-container">
                            <button>
                                DOWNLOAD CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default About