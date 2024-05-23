import { css } from '@emotion/css';

import { ReactComponent as CssLogo } from '../assets/skill-images/css3-original-wordmark.svg';
import { ReactComponent as GitLogo } from '../assets/skill-images/github-original-wordmark.svg';
import { ReactComponent as Html5Logo } from '../assets/skill-images/html5-original-wordmark.svg';
import { ReactComponent as JsLogo } from '../assets/skill-images/javascript-original.svg';
import { ReactComponent as PostLogo } from '../assets/skill-images/postgresql-original-wordmark.svg';
import { ReactComponent as ReactLogo } from '../assets/skill-images/react-original-wordmark.svg';
import { ReactComponent as TypeLogo } from '../assets/skill-images/typescript-logo-2020.svg';

const skillLogoCss = css`
  list-style-type: none;
  padding: 10px;
  margin: auto;
  padding: auto;
  display: inline;
`

export default function TechSkillsSection(): JSX.Element {

  // const skillLogos = {CssLogo, GitLogo, Html5Logo, JsLogo, PostLogo, RailsLogo,}
  //SVG components rendered below
  return (
    <div className='skill-container'>
      <ul className='skill-logos'>
        
        <li className={skillLogoCss}>
          <CssLogo />
        </li>
        <li className={skillLogoCss}>
          <Html5Logo />
        </li>
        <li className={skillLogoCss}>
          <JsLogo />
        </li>
        <li className={skillLogoCss}>
          <ReactLogo />
        </li>
        <li className={skillLogoCss}>
          <GitLogo />
        </li>
        <li className={skillLogoCss}>
          <PostLogo />
        </li>
        <li className={skillLogoCss}>
          <TypeLogo />
        </li>
        {/* <li className={skillLogoCss}>
          <RailsLogo />
        </li> */}
        {/* <form action={mappedProj.link}>
              <button type='submit'>GitHub Link</button>
        </form> */}
      </ul>
    </div>
  )
}