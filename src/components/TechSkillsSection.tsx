import { ReactComponent as CssLogo } from '../assets/skill-images/css3-original-wordmark.svg';
import { ReactComponent as GitLogo } from '../assets/skill-images/github-original-wordmark.svg';
import { ReactComponent as Html5Logo } from '../assets/skill-images/html5-original-wordmark.svg';
import { ReactComponent as JsLogo } from '../assets/skill-images/javascript-original.svg';
import { ReactComponent as PostLogo } from '../assets/skill-images/postgresql-original-wordmark.svg';
// import { ReactComponent as RailsLogo } from '../assets/skill-images/rails-original-wordmark.svg';
import { ReactComponent as ReactLogo } from '../assets/skill-images/react-original-wordmark.svg';
import { ReactComponent as TypeLogo } from '../assets/skill-images/typescript-logo-2020.svg';

export function TechSkillsSection(): JSX.Element {

  // const skillLogos = {CssLogo, GitLogo, Html5Logo, JsLogo, PostLogo, RailsLogo,}
  //SVG components rendered below
  return (
    <div className='skill-container'>
      <ul className='skill-logos'>
        
        <li className='skill-logos-li'>
          <CssLogo />
        </li>
        <li className='skill-logos-li'>
          <Html5Logo />
        </li>
        <li className='skill-logos-li'>
          <JsLogo />
        </li>
        <li className='skill-logos-li'>
          <ReactLogo />
        </li>
        <li className='skill-logos-li'>
          <GitLogo />
        </li>
        <li className='skill-logos-li'>
          <PostLogo />
        </li>
        <li className='skill-logos-li'>
          <TypeLogo />
        </li>
        {/* <li className='skill-logos-li'>
          <RailsLogo />
        </li> */}
        {/* <form action={mappedProj.link}>
              <button type='submit'>GitHub Link</button>
        </form> */}
      </ul>
    </div>
  )
}

export default TechSkillsSection