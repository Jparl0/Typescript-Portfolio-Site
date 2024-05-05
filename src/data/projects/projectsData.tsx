export interface Project {
    id: number
    title: string
    img_src: string
    link: string
    description: string
  }

export const projectsData: Project[] = [
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
    
