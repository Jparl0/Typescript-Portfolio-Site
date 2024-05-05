import ProjectItem from '../components/ProjectItem'
import { Project } from '../data/projects/projectsData'

interface ProjectsProp<T> {
  projects: Project[]
  projectsRenderer: (project: T) => JSX.Element
}

export default function ProjectSection<T>(props: ProjectsProp<T>): JSX.Element {
    const {projects, projectsRenderer} = props
    const renderProjects = (project: T): JSX.Element => (
        <div>
            {projectsRenderer(project)}
        </div>
    )

    return (
        // Maps over the Array of Objects set above to dynamically render each Project with corresponding information
            <div>
                
                <div>
                   {projects.map((mappedProj) => renderProjects((project) => <ProjectItem />))}
                </div>
                    
                
            </div>
    )
}