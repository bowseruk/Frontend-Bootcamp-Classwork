import React from 'react';
import { Link } from "react-router-dom";

const ProjectCard = ({ id, image, title }) => {
    return (
        <Link to={`/project/${id}`}>
            <div >
                <img className='project-image' src={image} alt={title} />
                <h1>{title}</h1>
            </div>
        </Link>
    );
};

export default ProjectCard;