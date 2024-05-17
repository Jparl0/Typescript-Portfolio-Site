import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectProps, projectsData } from '../data/projects/projectsData'

function renderProjects(renderedProj: ProjectProps): React.Component {
    return (
        
        <div>
            <ProjectItem {...renderedProj}/>
        </div>
        
    )
}

export default function ProjectSection(): React.Component {
    
    return (
        // Maps over the Array of Project Objects to dynamically render each Project with corresponding data
            <div>
                {projectsData.map((mappedProj) => (renderProjects(mappedProj)))}
            </div>

    )
}