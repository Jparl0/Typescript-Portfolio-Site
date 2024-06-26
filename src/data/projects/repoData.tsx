export class Repo {

  id: number;
  title: string;
  img_src: string;
  link: string;
  description: string;
  
  constructor(props:Repo) {
    const {id, title, img_src, link, description} = props
    
    this.id = id;
    this.title = title;
    this.img_src = img_src;
    this.link = link;
    this.description = description;
  }
}

const repo1Data = new Repo({
  id: 1,
  title: "Satisfactory Planner", 
  img_src: "./photos/Satisfactory.jpeg", 
  link: "https://github.com/Jparl0/Satsifactory-Planner-2.0",
  description: "This app allows players of the video game Satisfactory to visualize the game's data based on their personal factory systems to assist in strategizing future planning."
})

const repo2Data = new Repo({
  id: 2,
  title: "Canasta Clash", 
  img_src: "./photos/github.png", 
  link: "https://github.com/Jparl0/Canasta-Clash",
  description: "Currently still in Development, but its a single page web application describing the classic rules for the game of Canasta and some personal variants that make the game more enjoyable for myself and my family!"
})

const repo3Data = new Repo({
  id: 3,
  title: "DC2 Text Scrapper", 
  img_src: "./photos/github.png", 
  link: "https://github.com/Jparl0/Dark-Cloud-2-Web_Scraper",
  description: "Currently still in Development, iy utilizes Python for the backend, this application combs over a single page application searching and displaying information vital to a childhood game. This information is then categorized and stored in a database for visualization and analysis."
})

export const repoData = [repo1Data, repo2Data, repo3Data]