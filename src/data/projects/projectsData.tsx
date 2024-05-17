export interface ProjectProps {
    id: number;
    title: string;
    img_src: string;
    link: string;
    description: string;
  }

  class Project implements ProjectProps {
  
    id: number;
    title: string;
    img_src: string;
    link: string;
    description: string;
    
    constructor(props:ProjectProps) {
      const {id, title, img_src, link, description} = props

      this.id = id;
      this.title = title;
      this.img_src = img_src;
      this.link = link;
      this.description = description;
    }
    get url(): string {
      return this.link;
    }
    
  }

export const project1Data = new Project({
  id: 1,
  title: "Satisfactory Planner", 
  img_src: "./images/Satisfactory.jpeg", 
  link: "https://github.com/Jparl0/Satsifactory-Planner-2.0",
  description: "This app allows players of the video game Satisfactory to visualize the game's data based on their personal factory systems to assist in strategizing future planning."
})

export const projectsData = [
      {
        id: 1,
        title: "Satisfactory Planner", 
        img_src: "./images/Satisfactory.jpeg", 
        link: "https://github.com/Jparl0/Satsifactory-Planner-2.0",
        description: "This app allows players of the video game Satisfactory to visualize the game's data based on their personal factory systems to assist in strategizing future planning."
      }, 
      { 
        id: 2,
        title: "DC2 Text Scrapper", 
        img_src: "./images/github.png", 
        link: "https://github.com/Jparl0/Dark-Cloud-2-Web_Scraper",
        description: "Using Go, this application combs over a single page application searching for specific information. This information is then categorized and stored in a database for later use."
      } 
]
    
