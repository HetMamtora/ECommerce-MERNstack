import React from 'react'
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <p>DOWNLOAD APPS<br/> (Coming Soon)</p>
            <img src={playStore} alt="playstore"/>
            <img src={appStore} alt="Appstore"/>
        </div>
        
        <div className="midFooter">
            <h1>E-COMMERCE</h1>
            <p>Made with &#9829; by </p>
            <p>H.M. &copy; 2023</p>
        </div>
        
        <div className="rightFooter">
        <h4>FOLLOW US</h4>
            <a href="https://github.com/HetMamtora"> <GitHubIcon /> GitHub</a>
            <a href="https://www.linkedin.com/in/het-mamtora/"> <LinkedInIcon /> LinkedIn</a>
        </div>
    </footer>
  )
}

export default Footer