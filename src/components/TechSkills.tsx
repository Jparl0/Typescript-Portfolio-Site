import { ReactComponent as CssLogo } from './skill_images/css3-original-wordmark.svg';
import { ReactComponent as GitLogo } from './skill_images/github-original-wordmark.svg';
import { ReactComponent as Html5Logo } from './skill_images/html5-original-wordmark.svg';
import { ReactComponent as JsLogo } from './skill_images/javascript-original.svg';
import { ReactComponent as PostLogo } from './skill_images/postgresql-original-wordmark.svg';
import { ReactComponent as RailsLogo } from './skill_images/rails-original-wordmark.svg';
import { ReactComponent as ReactLogo } from './skill_images/react-original-wordmark.svg';
import { ReactComponent as RubyLogo } from './skill_images/ruby-plain-wordmark.svg';

export function TechSkills() {

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
          <RubyLogo />
        </li>
        <li className='skill-logos-li'>
          <RailsLogo />
        </li>
        {/* <form action={mappedProj.link}>
              <button type='submit'>GitHub Link</button>
        </form> */}
      </ul>
    </div>
  )
}

export default TechSkills