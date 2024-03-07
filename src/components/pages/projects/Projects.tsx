import React from 'react'
import Container from '../../Container'
import './Projects.css'
import { projects } from '../../data/Projects'
import Card from '../../Card'

const Projects = () => {
    return (
        <Container id="projects">
            <div className="projects-frame">
                <div className="projects-content">
                    <div className="projects-header">
                        <h2>PROJECTS</h2>
                        <p>Portfolio Showcase: My Introductory Creations and Endeavors</p>
                    </div>
                    <div className="projects-list">
                        {projects.map((project, index) => (
                            <Card key={index} project={project} />
                        ))}
                    </div>
                    <div className="projects-button">
                        <a href="https://github.com/kyletagulao">
                            <button>
                                VIEW MORE ON GITHUB
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Projects