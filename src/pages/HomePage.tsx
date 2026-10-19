import { css } from '@emotion/css'
import NavBar from '../components/NavBar'
import RepoSection from '../components/RepoSection'
import TechSkillsSection from '../components/TechSkillsSection'

const aboutDivCss = css`
  padding: 40px 75px;
`

const aboutDivParaCss = css`
  font-size: x-large;
  padding: 10px 30px;
  background-color: rgba(223, 224, 224, 0.344);
  box-shadow: 0 4px 8px 0 rgba(241, 110, 110, 0.911);
`

const aboutParaCss = css`
  margin: 12px 18px;
`

const outerSkillsContainerCss = css`
  margin: auto;
  background-color: rgba(223, 224, 224, 0.344);
  box-shadow: 0 4px 8px 0 rgba(241, 110, 110, 0.911);
  padding: 10px;
  padding-left: 5%;
  padding-right: 5%;
  height: auto;
  width: 1000px;
`

const skillSectionContainerCss = css`
  padding: 40px 75px;
`

const skillSectionTitleCss = css`
  padding-left: 140px;
`

const outerRepoContainerCss = css`
  padding: 0px;
`

const outerTextContainerCss = css`
  padding: 0px;
`

const innerTextContainerCss = css`
  float: left;
  padding-left: 75px;
`


const repoDivCss = css`
  padding: 20px 75px;
`

const outerNavCss = css`
  margin: auto;
  padding-bottom: 5px;
`

const imageHeaderCss = css`
  float: right;
  right: 25%;
  height: 350px;
  width: auto;
`

export default function HomePage(): JSX.Element {
    return (
        <div className="main-page" id="main-page">
        {/* Header Section */}
        <header className='header'>
          {/* Nav Bar component */}
          <div className={outerNavCss}>
              <NavBar />
          </div >
          <div className={outerTextContainerCss}>
            {/* Header Text Container */}
            <div className={innerTextContainerCss}>
              <h1 id='welcome-text'>
                Welcome!
              </h1>
              <h3>
                  I'm Joey Parlamenti, a Full-Stack Web Developer based in Manhattan, New York.
              </h3>
              <button>
                <a href="mailto:joeyparlamenti@gmail.com">
                  Contact Me
                </a>
              </button>
            </div>
            {/* Header Img */}
            <div className={imageHeaderCss}>
              <img src='./photos/header-pic.png' alt=''/>
            </div>
          </div>        
          
          
        </header>

        {/* About-me section */}
        <div className={aboutDivCss}>
          <h2> About me </h2>
            <h4>
                Web Developer | Project Management
            </h4>
          <div className={aboutDivParaCss}>
            <p className={aboutParaCss}>
              A former collegiate volleyball player looking to make lasting impacts in production-quality systems. With a degree in the Health Behavior Science, alongside years of experience in Project Management & Customer Support, I've gained a unique perspective to approach any challenge with. 
            </p>
            <p className={aboutParaCss}>
              After being diagnosed with ADHD/OCD and adapting to the learning obstacles it presented, I believe it has provided me another facet to think in an otherwise unconventional manner.
            </p>
            <p className={aboutParaCss}>
              Even though I'm not musical/artistic, Software Development has given me the ability to create anything I can imagine. Data management and optimization have always been at the forefront of that creation, introducing me to DSAs to properly process the myriad of information. I'm now seeking a position where I can further develop and refine these skills, ensuring my long-term success in the Software Development field.
            </p>
          </div>
        </div>
        {/* Projects section with Projects Component */}
        <div className={repoDivCss}>
          <h2>
              Repos
          </h2>
          <div className={outerRepoContainerCss}>
              <RepoSection />
          </div>
        </div>
        {/* Tech Skills Component*/}
        <div className={skillSectionContainerCss}>
          <h2 className={skillSectionTitleCss}>
            Tech Skills
          </h2>
          <div className={outerSkillsContainerCss}>
            <TechSkillsSection />
          </div>
        </div>
        {/* Contact-me section */}
        <div className="contact-div" id="contact-div">
          <h3>
            Contact me here 
          </h3>
          <a href="mailto:joeyparlamenti@gmail.com">
            JoeyParlamenti@gmail.com
          </a>
        </div>
    </div>
    )
}