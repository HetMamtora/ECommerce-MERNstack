import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const About = () => {

    const visitGithub = () => {
        window.location = "https://github.com/HetMamtora";
      };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">ABOUT US</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="D:\College\Semester - 8\MERN-Stack Ecommerce\frontend\src\images\Profileava.jpg"
              alt="HetMamtora"
            />
            <Typography>Het Mamtora</Typography>
            <Button onClick={visitGithub} color="primary">
              Visit GitHub
            </Button>
            <span>
              This E-Commerce website is developed by @Het Mamtora.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">PROFESSIONAL HANDLES</Typography>
            <a
              href="https://github.com/HetMamtora"
              target="blank"
            >
              <GitHubIcon className="githubIcon" />
            </a> <br/>

            <a href="https://www.linkedin.com/in/het-mamtora/" target="blank">
              <LinkedInIcon className="linkedinIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About