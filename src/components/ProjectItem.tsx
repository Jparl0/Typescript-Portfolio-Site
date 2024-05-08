import { Project } from '../data/projects/projectsData'

interface IncomingProjectProp extends Project{
    // isMounted: true
    mappedProj: Project
}

export default function ProjectItem(props: IncomingProjectProp): JSX.Element {
    const {mappedProj} = props
    const {id, title, img_src, link, description} = mappedProj
    
    return (
        <div className='project-cards'>
            <h3 className='proj-card-titles'>{title}</h3>
            <p>{description}</p>
            <img
                src={require(`${img_src}`)}
                alt={title}
                className='proj-card-images'
            /> 
            <form action={link}>
                <button type='submit'>GitHub Link</button>
            </form>
            {/* <button> Favorite </button> */}
        </div>
  )
}