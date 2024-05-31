import { css } from "@emotion/css"

const navListLi = css`
    display: block;
    float: right;
    padding-top: 15px;
`

const innerNavCss = css`
    top: 2.5%; 
    background-color: rgb(0, 0, 0);
    height: 50px;
`

const navListCss = css`
    list-style-type: none;
    margin: auto;
    padding: auto;
    display: block;
    float: right;
`

const navListLinksCss = css`
    text-align: center;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    &:hover {
        background-color: rgb(243, 160, 160);
    }
`

export default function NavBar(): JSX.Element {
  return (
    // Nav Bar HTML with links to social accounts
    <div className={innerNavCss}>
        <ul className={navListCss}>
            <li className={navListLi}>
                <a className={navListLinksCss} href='https://www.linkedin.com/in/joey-parlamenti/'>
                    LinkedIn
                </a>
            </li>
            <li className={navListLi}>
                <a className={navListLinksCss} href='https://github.com/Jparl0'>
                    GitHub
                </a>
            </li>
            <li className={navListLi}>
                <a className={navListLinksCss} href="#repo-div">
                    Repos
                </a>
            </li>
            <li className={navListLi}>
                <a className={navListLinksCss} href="#about-div">
                    About
                </a>
            </li>
            <li className={navListLi}>
                <a className={navListLinksCss} href="#contact-div">
                    Contact
                </a>
            </li>
        </ul>
    </div>
  )
}