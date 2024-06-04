import { Repo, repoData } from '../data/projects/repoData'
import RepoBox from './RepoBox'
import { css } from '@emotion/css'


const innerRepoContainerCss = css`
    display: flex;
    flex-wrap: wrap;
    margin: 30px;
    padding: 10px;
`

export default function RepoSection(): JSX.Element {
    return (
        // Maps over the Array of Project Objects to dynamically render each Project with corresponding data
            <div className={innerRepoContainerCss}>
                {
                    repoData.map((mappedRepo: Repo) => {
                        return (<RepoBox {...mappedRepo} key={mappedRepo.id}/>)
                    })
                }
            </div>
    )
}