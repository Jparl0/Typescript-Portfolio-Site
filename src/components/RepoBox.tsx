import { Repo } from '../data/projects/repoData'
import { css } from '@emotion/css'

const repoBoxCss = css`
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

const repoBoxTitlesCss = css`
    padding-top: 15px;
`

const repoBoxDescr = css`
    padding: 0px 45px;
`

const repoBoxImages = css`
    padding: 15px;
    align-items: center;
    height: auto;
    width: 500px;
`


export default function RepoBox (props: Repo): JSX.Element {
    const {id, title, img_src, link, description} = props
        return (
            <div className={repoBoxCss} key={id}>
                <h3 className={repoBoxTitlesCss}>{title}</h3>
                <p className={repoBoxDescr}>{description}</p>
                <img
                    src={img_src}
                    alt={title}
                    className={repoBoxImages}
                /> 
                <form action={link}>
                    <button type='submit'>GitHub Link</button>
                </form>
                {/* <button> Favorite </button> */}
            </div>
        )

}