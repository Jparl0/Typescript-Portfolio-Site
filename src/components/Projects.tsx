interface ProjectProps {
    id: number
    title: string
    img_src: string
    link: string
    description: string
}

export default function Projects(props: ProjectProps): JSX.Element {
    // Individual mapped objects input into html below
    return (
        <div className='project-cards'>
            <h3 className='proj-card-titles'>{props.title}</h3>
            <p>{props.description}</p>
            <img
                src={require(`${props.img_src}`)}
                alt={props.title}
                className='proj-card-images'
            /> 
            <form action={props.link}>
                <button type='submit'>GitHub Link</button>
            </form>
            {/* <button> Favorite </button> */}
        </div>
  )
}