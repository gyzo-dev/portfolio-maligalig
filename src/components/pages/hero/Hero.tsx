import React from 'react'
import heroimage from '../../../assets/2.jpg'
import iconlinkedin from '../../../assets/mdi_linkedin.png'
import icongithub from '../../../assets/bi_github.png'
import './Hero.css'
import Container from '../../Container'

const Hero = () => {
    return (
        <Container id="home">
            <div className="hero-frame">
                <div className="hero-content">
                    <div className="hero-left">
                        <div className="hero-text">
                            <p>Hello! I'm</p>
                            <h1>MARK ANGELO</h1>
                            <div className="subheading">A Passionate Frontend Web/Mobile Developer and UI/UX Designer</div>
                        </div>
                        <div className="hero-links">
                            <a href="https://www.linkedin.com/in/mark-angelo-maligalig-74457a2b4/">
                                <img src={iconlinkedin} />

                            </a>
                            <a href="https://github.com/kyletagulao">
                                <img src={icongithub} />
                            </a>
                        </div>
                    </div>
                    <div className="hero-right">
                        <img src={heroimage} />
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default Hero