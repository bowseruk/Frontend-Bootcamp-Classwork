import React from 'react';
import projects from '../data/projects.json'
import ProjectCard from '../components/ProjectCard';
import '../styles/ProjectGallery.css'

const ProjectGallery = () => {
    let listOfProjects = projects.map((project, i) => <ProjectCard {...project} key={i} />)
    return (
        <div className='project-gallery-container'>
            {listOfProjects}
        </div>
    );
};

export default ProjectGallery;