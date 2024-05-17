import { Repo, repoData } from '../data/projects/repoData'
import RepoCard from '../components/RepoCard'

export default function RepoSection(): JSX.Element {
    
    return (
        // Maps over the Array of Project Objects to dynamically render each Project with corresponding data
            <div>
                {
                repoData.map((mappedRepo: Repo) => {
                    return (<RepoCard {...mappedRepo} key={mappedRepo.id}/>)
                })
                }
            </div>

    )
}