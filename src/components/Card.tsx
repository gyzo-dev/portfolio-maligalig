import { Project } from './data/Projects';
import './Card.css';

interface CardProps {
    project: Project;
}

function Card({ project }: CardProps) {
    return (
        <div className="card-frame">
            <img src={project.img} />
            <div className="card-content">
                <div className="card-text">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
                <div className="button-container">
                    <a href={project.src}>
                        <button>
                            VIEW ON GITHUB
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card