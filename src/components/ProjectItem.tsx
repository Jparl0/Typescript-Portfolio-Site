import { Project } from '../data/projects/projectsData'

export default function ProjectItem(props: Project): JSX.Element {
    const {id, title, img_src, link, description} = props
    
    return (
        <div className='project-cards' key={id}>
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