import React from "react";
import github from "../images/github-mark.png";
import linkdin from "../images/In-Blue-128.png";


function Footer() {
  return (
    <footer>
      <a href={process.env.REACT_APP_MYGITHUB}><img src={github} alt="Github" width={25} height={25}/></a>
      <a href={process.env.REACT_APP_MYLINKEDIN}><img src={linkdin} alt="LinkedIn" width={25} height={25}/></a>
    </footer>
  );
}

export default Footer;
