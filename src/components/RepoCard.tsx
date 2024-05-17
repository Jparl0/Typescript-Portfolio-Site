import { Repo } from '../data/projects/repoData'

export default function RepoCard (props: Repo): JSX.Element {
    const {id, title, img_src, link, description} = props
    
        return (
            <div className='Repo-cards' key={id}>
                <h3 className='repo-card-titles'>{title}</h3>
                <p>{description}</p>
                <img
                    src={img_src}
                    alt={title}
                    className='repo-card-images'
                /> 
                <form action={link}>
                    <button type='submit'>GitHub Link</button>
                </form>
                {/* <button> Favorite </button> */}
            </div>
        )

}