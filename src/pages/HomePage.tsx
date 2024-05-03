import { PROJECTS_DATA } from '../constants'
import HeaderPic from './assets/photos/header-pic.png'
import Projects from '../components/Projects'


export default function HomePage(): JSX.Element {
    return (
        <div className="main-page" id="main-page">
        {/* Header Section */}
        <header className='header'>
          {/* Nav Bar component */}
          <div className="outer-nav" id="outer-nav">
              {/* <NavBar /> */}
          </div >        
          <div className='header-text'>
            <h1 id='welcome-text'>
              Welcome!
            </h1>
            <h3>
                I'm Joey Parlamenti, a Full-Stack Web Developer based in Manhattan, New York.
            </h3>
            <button>
              <a href="#contact-div">
                Contact Me
              </a>
            </button>
          </div>
        {/* Header Img */}
          <div className='img-header'>
            <img src={HeaderPic} alt=''/>
          </div>
        </header>

        {/* About-me section */}
        <div className='about-div' id='about-div'>
          <h2> About me </h2>
            <h4>
                Web Developer | Project Management
            </h4>
          <div id='about-para'>
            <p id='about-text'>
              As someone who has always had a passion for games growing up, I've developed a fascination with any kind of puzzle or problem I could try to solve. 
              From console games to computer games, my obsession with figuring out the most optimal ways of winning or playing has permeated any and all types of interactive entertainment I engage with. 
              FlatIron School's Software Engineering program was the perfect place to transition those strong desires to find solutions and optimize processes into meaningful skills. 
              Leaving my previous career in Project Management to pursue Software Development has enabled me to create unique projects that revolve around my interests. 
              Data Management and optimization have always been at the forefront of how I play games and lead my professional development so finding a position that allows me to develop and hone these skills is key to my long-term success in the field.
            </p>
          </div>
        </div>
        {/* Projects section with Projects Component */}
        <div className="projects-div" id="projects-div">
          <h2>
              Projects
          </h2>
          <div className='projects-container'>
            {
              // Maps over the Array of Objects set above to dynamically render each Project with corresponding information
            //   PROJECTS_DATA.map(mappedProj => {
            //     return (<Projects key={mappedProj.id} mappedProj={mappedProj}/>)
            //   }) 
            }
          </div>
        </div>
        {/* Tech Skills Component*/}
        <div className='skills-section'>
          <h2 id='tech-skill-title'>
            Tech Skills
          </h2>
        <div className='outer-skills-container'>
        {/* <TechSkills /> */}
        </div>
        </div>
        {/* Contact-me section */}
        <div className="contact-div" id="contact-div">
          <h3>
            Contact me here 
          </h3>
           JoeyParlamenti@gmail.com
        </div>
    </div>
    )
}