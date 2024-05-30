import { css } from "@emotion/css"

const navListLi = css`
    display: block;
    float: right;
    padding-top: 15px;
`

export default function NavBar(): JSX.Element {
  return (
    // Nav Bar HTML with links to social accounts
    <div className="inner-nav" id="inner-nav">
        <ul className='nav-list'>
            <li className={navListLi}>
                <a className='nav-list-links' href='https://www.linkedin.com/in/joey-parlamenti/'>
                    LinkedIn
                </a>
            </li>
            <li className={navListLi}>
                <a className='nav-list-links' href='https://github.com/Jparl0'>
                    GitHub
                </a>
            </li>
            <li className={navListLi}>
                <a className='nav-list-links' href="#repo-div">
                    Repos
                </a>
            </li>
            <li className={navListLi}>
                <a className='nav-list-links' href="#about-div">
                    About
                </a>
            </li>
            <li className={navListLi}>
                <a className='nav-list-links' href="#contact-div">
                    Contact
                </a>
            </li>
        </ul>
    </div>
  )
}