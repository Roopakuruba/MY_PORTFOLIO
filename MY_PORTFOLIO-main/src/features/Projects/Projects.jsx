import React from "react";
import "./Projects.css";
import ProjectTemplate from "./ProjectTemplate";
import content from "../../content/content";
import PortfolioVideo from "../../assets/videos/roopaportfolio.mp4";
import HeartyHelperVideo from "../../assets/videos/foodmunch.mp4";
import TechCurveVideo from "../../assets/videos/library managemnt.mp4";
import ConqtVideo from "../../assets/videos/guessing game.mp4";
import ProjectPortfolio from "./ProjectPortfolio";
import ChalisaVideo from "../../assets/videos/advancedtodolist.mp4";

const Projects = () => {
  const { projectContent } = content;
  const ToolsUsedPf = [
    "React js",
    "HTML",
    "CSS",
    "Bootstrap",
    "javaScript",
    "Git",
    "Git Hub",
    "NPM",
    "Netlify",
  ];
  const ToolsUsedHcCh = [
    "HTML",
    "CSS",
    "Bootstrap",
    "javaScript",
    "Git",
    "Git Hub",
    "Local Storage",
    "VS Code",
    
  ];
  const ToolsUsedHH = [
    "HTML",
    "CSS",
    "bootstrap",
    "Git",
    "GitHub",
    "UI/UX Design",
    "Responsive Web Design",
  ];
  const ToolsUsedTc = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git" ,
    "Chrome DevTools",
    "RESTful APIs",
    "Fetch API/Axios",
    "JSON",
    "VS Code",
 ];
  const ToolsUsedCt = [
    "HTML",
    "CSS",
    "javaScript",
    "bootstrap",
    "Git",
    "GitHub",
    "VS Code",
    "Chrome DevTools ",
    "JavaScript DOM Manipulation",
    "Event Listeners",
    "Local Storage ",
    "Input Validation",
  ];
  const handleLiveLinkPo = () => {
    window.open("roopakuruba.ccbp.tech");
};
 const handleLiveLinkHh = () => {
    window.open("https://" + "rooparecipe.ccbp.tech", "_blank");
  };
  const handleLiveLinkTc = () => {
    window.open("https://" + "librarymanage7.ccbp.tech", "_blank");
  };
  const handleLiveLinkCt = () => {
    window.open("https://" + "numberguessing6.ccbp.tech", "_blank");
  };
  const handleLiveLinkHaCh = () => {
    window.open("https://" + "advancetodo.ccbp.tech", "_blank");
  };
  return (
    <div className="projects-div" id="projects">
      <div>
        <h1 className="prjct-title">Projects - Past Work.</h1>
      </div>
      <ProjectTemplate
        ProjecTitle=" Project:1 Portfolio"
        ProjectDescription={projectContent.prjdescrpPo}
        ProjectVideo={PortfolioVideo}
        ToolsUsed={ToolsUsedPf}
        ProjectOverview={
          <>
            <p>
              {projectContent.prjPortfolioOv1}
              {projectContent.prjPortfolioOv2}
            </p>
            <p>{projectContent.prjPortfolioOv3}</p>
            <p>{projectContent.prjPortfolioOv4}</p>
          </>
        }
        handleLiveLink1={handleLiveLinkPo}
      />
      {/* <ProjectPortfolio
        ProjecTitle=" Project:1 Portfolio"
        ProjectDescription={projectContent.prjdescrpPo}
        ToolsUsed={ToolsUsedPf}
        ProjectOverview={
          <>
            <p>
              {projectContent.prjPortfolioOv1}
              {projectContent.prjPortfolioOv2}
            </p>
            <p>{projectContent.prjPortfolioOv3}</p>
            <p>{projectContent.prjPortfolioOv4}</p>
          </>
        }
        handleLiveLink1={handleLiveLinkPo}
      /> */}

      <ProjectTemplate
        ProjecTitle=" Project:2 Food Munch App"
        ProjectDescription={projectContent.prjdescrpHh}
        ProjectVideo={HeartyHelperVideo}
        ToolsUsed={ToolsUsedHH}
        ProjectOverview={
          <>
            <p>
              {projectContent.prjDescriptionHh1}
              {projectContent.prjDescriptionHh2}
            </p>
            <p>{projectContent.prjDescriptionHh3}</p>
            <p>{projectContent.prjDescriptionHh4}</p>
          </>
        }
        handleLiveLink1={handleLiveLinkHh}
      />

      <ProjectTemplate
        ProjecTitle=" Project:3 Library Management"
        ProjectDescription={projectContent.prjdescrpTc}
        ProjectVideo={TechCurveVideo}
        ToolsUsed={ToolsUsedTc} 
        ProjectOverview={
          <>
            <p>{projectContent.prjDescriptionTc1}</p>
            <p>{projectContent.prjDescriptionTc2}</p>
          </>
        }
        handleLiveLink1={handleLiveLinkTc}
      />
      <ProjectTemplate
        ProjecTitle=" Project:4 Number Guessing Game"
        ProjectDescription={projectContent.prjdescrpCt}
        ProjectVideo={ConqtVideo}
        ToolsUsed={ToolsUsedCt}
        ProjectOverview={
          <>
            <p>{projectContent.prjDescriptionCt1}</p>
            <p>{projectContent.prjDescriptionCt2}</p>
            <p>{projectContent.prjDescriptionCt3}</p>
          </>
        }
        handleLiveLink1={handleLiveLinkCt}
      />
      <ProjectTemplate
        ProjecTitle=" Project:5 Advanced To-Do-List"
        ProjectDescription={projectContent.prjdescrpHaCh}
        ProjectVideo={ChalisaVideo}
        ToolsUsed={ToolsUsedHcCh}
        ProjectOverview={
          <>
            <p>{projectContent.prjDescriptionHaCh1}</p>
            <p>{projectContent.prjDescriptionHaCh2}</p>
            <p>{projectContent.prjDescriptionHaCh3}</p>
          </>
        }
        handleLiveLink1={handleLiveLinkHaCh}
      />
    </div>
  );
};

export default Projects;
