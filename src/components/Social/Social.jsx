import React from 'react';
import "./Social.css";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

const Social = ({DevToLogo, color}) => {
    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/k-roopa-sree-83a5762b2");
      };
      const handleGitGubClick = () => {
        window.open("https://github.com/Roopakuruba");
      };
  return (
<div className="intr-ct-con-div" style={{color: color || '#000'}}>
          <TiSocialLinkedin
            size={40}
            className="intr-con-icon"
            onClick={handleLinkedInClick}
          />
          <FaGithub
            size={30}
            className="intr-con-icon"
            onClick={handleGitGubClick}
          />
        </div>  )
}

export default Social;