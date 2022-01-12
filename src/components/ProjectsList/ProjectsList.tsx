import React from 'react';
import ProjectsListCard from '../ProjectsListCard/ProjectsListCard';

const projectsListCardPropsArray = [
  {
    title: "Modeling the Propagation of True/Fake News on Twitter",
    description: "Research conducted on the propagation of fake news on Twitter. How quickly does fake news spread? How does it fare against true news?",
    thumbnailSrc: "src/img/Projects/TwitterDataCollection/TwitterDataCollectionThumbnail.png",
    route: "modeling-the-propagation-of-true-fake-news-on-twitter"
  },
  {
    title: "Harmonizer",
    description: "An algorithm to give a melody accompanying chords. Two methods are presented, one involving machine learning and another applying music theory.",
    thumbnailSrc: "src/img/Projects/Harmonizer/HarmonizerThumbnail.png",
    route: "harmonizer"
  },
  {
    title: "Rhythm Bullet Hell",
    description: "A game project made in approximately 12 hours at a 24 hour hackathon. Inspired by Just Shapes and Beats, this is a bullet hell game where obstacles are synchronized to music.",
    thumbnailSrc: "src/img/Projects/RhythmBulletHellThumbnail.png",
    route: "rhythm-bullet-hell"
  },
  {
    title: "Mystery Dungeon Tactics",
    description: "A turn-based strategy game inspired by the Pokemon Mystery Dungeon series and Final Fantasy Tactics games, mixing turn-based tactics, dungeon-crawling/roguelike, and RPG elements.",
    thumbnailSrc: "src/img/BlenderDragon.png",
    route: "mystery-dungeon-tactics"
  },
  {
    title: "Competitive Programming",
    description: "Technically not a project, but a discussion of my adventures in competitive programming and computer science.",
    thumbnailSrc: "src/img/Projects/CompetitiveProgrammingThumbnail.png",
    route: "competitive-programming"
  },
  {
    title: "BCA Bus Map",
    description: "A webapp that allows one to see the location of their bus ride home after the long school day.",
    thumbnailSrc: "src/img/Projects/BCABusMapThumbnail.png",
    route: "bca-bus-map"
  },
  {
    title: "Trojan.Ransom.BCA",
    description: "A \"fun\" application disguised as the video game Fortnite that encrypts your files. Inspired by WannaCry, this was an experiment in creating our own malware.",
    thumbnailSrc: "src/img/Projects/TrojanRansomBCAThumbnail.png",
    route: "trojan-ransom-bca"
  },
  {
    title: "CAS",
    description: "A brief adventure into the world of CAS (Computer Algebra System) software and the data structures and algorithms used to accomplish such tasks.",
    thumbnailSrc: "src/img/Projects/CASThumbnail.png",
    route: "cas"
  }
]

export default class ProjectsList extends React.Component {
  render() {
    return (
      <div id='ProjectsList'>
        {projectsListCardPropsArray.map(props =>
          <ProjectsListCard key={props.route} {...props} />
        )}
      </div>
    );
  }
}