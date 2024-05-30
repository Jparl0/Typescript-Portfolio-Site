import { Repo } from '../data/projects/repoData'
import { css } from '@emotion/css'

const repoCardCss = css`
    display: inline-block;
    margin: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    box-shadow: 0 4px 8px 0 rgba(241, 110, 110, 0.911);
    transition: 0.3s;
    width: 600px;
    background-color: rgba(223, 224, 224, 0.344);
    text-align: center;
    height: 500px;
`

const repoCardTitlesCss = css`
    padding-top: 15px;
`

const repoCardDescr = css`
    padding: 1px;
`

const repoCardImages = css`
    padding: 30px;
    align-items: center;
    height: auto;
    width: 500px;
`


export default function RepoCard (props: Repo): JSX.Element {
    const {id, title, img_src, link, description} = props
        return (
            <div className={repoCardCss} key={id}>
                <h3 className={repoCardTitlesCss}>{title}</h3>
                <p className={repoCardDescr}>{description}</p>
                <img
                    src={img_src}
                    alt={title}
                    className={repoCardImages}
                /> 
                <form action={link}>
                    <button type='submit'>GitHub Link</button>
                </form>
                {/* <button> Favorite </button> */}
            </div>
        )

}