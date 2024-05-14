import ProjectItem from '../components/ProjectItem'
import { Project, projectsData } from '../data/projects/projectsData'

export default function ProjectSection(): JSX.Element {
    
    function renderProjects (mappedProj: Project): JSX.Element {
        return (
            <div>
                <ProjectItem project={mappedProj}/>
            </div>
        )
    }

    return (
        // Maps over the Array of Project Objects to dynamically render each Project with corresponding data
            <div>
                {}
                {projectsData.map((mappedProj) => (renderProjects(mappedProj)))}
            </div>

    )
}