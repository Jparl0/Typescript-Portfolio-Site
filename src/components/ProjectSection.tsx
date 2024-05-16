import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectProps, projectsData } from '../data/projects/projectsData'

function renderProjects(renderedProj: ProjectProps): React.Component | null {
    return (
        
            <ProjectItem {...renderedProj}/>
        
    )
}

export default function ProjectSection(): JSX.Element  {
    
    return (
        // Maps over the Array of Project Objects to dynamically render each Project with corresponding data
            <div>
                {projectsData.map((mappedProj) => (renderProjects(mappedProj)))}
            </div>

    )
}