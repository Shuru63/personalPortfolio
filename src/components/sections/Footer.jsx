import React from "react";
import { Bio } from "../../data/constants";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
  PhoneAndroid,
  WhatsApp,
  Email,
  ArrowForwardRounded
} from "@mui/icons-material";
import "../StyleSection/Footer.css"; 

const Footer = () => {
  return (
    <div>
      <div className="social-media-icon-responsive ">
          <a className="social-media-icon-responsive" href={Bio.facebook} target="display">
            <FacebookRounded />
          </a>
          <a className="social-media-icon-responsive" href={Bio.twitter} target="display">
            <Twitter />
          </a>
          <a className="social-media-icon-responsive" href={Bio.linkedin} target="display">
            <LinkedIn />
          </a>
          <a className="social-media-icon-responsive" href={Bio.insta} target="display">
            <Instagram />
          </a>
        </div>
    <div className="footer-container">
      <div className="nav">
       <ul className="nav-cover">
       <p>  <ArrowForwardRounded className="arrow" />  <a className="nav-link" href="#About">About</a></p>
       <p> <ArrowForwardRounded className="arrow" />   <a className="nav-link" href="#Skills">Skills</a></p>
       <p> <ArrowForwardRounded className="arrow" />  <a className="nav-link" href="#Experience">Experience</a></p>
       <p><ArrowForwardRounded className="arrow" /> <a className="nav-link" href="#Projects">Projects</a></p>
       <p><ArrowForwardRounded className="arrow" /> <a className="nav-link" href="#Education">Education</a></p>
        </ul>
        </div>
      <div className="footer-wrapper">
       
        <div className="logo">Shubham Kumar Garg</div>
        <div className="connect">
          <div className="all-connection">
          <p><Email className="arrow" /> <a href="mailto:shubhamkumargarg57@gmail.com">shubhamkumargarg57@gmail.com</a></p>
          <p> <PhoneAndroid className="arrow" /><a href="tel:+917766968284">+91 7766968284</a>
          </p>
          <p><WhatsApp className="arrow"  /><a href="mailto:shubhamkumargarg57@gmail.com">+91 7766968284</a></p>
          </div>
        </div>
        
        <div className="social-media-icons">
          <a className="social-media-icon" href={Bio.facebook} target="display">
            <FacebookRounded />
          </a>
          <a className="social-media-icon" href={Bio.twitter} target="display">
            <Twitter />
          </a>
          <a className="social-media-icon" href={Bio.linkedin} target="display">
            <LinkedIn />
          </a>
          <a className="social-media-icon" href={Bio.insta} target="display">
            <Instagram />
          </a>
        </div>
       
      </div>
       
    </div>
    <p className="copyright">
          &copy; 2024 Shubham Kumar Garg. All rights reserved.
        </p>
    </div>
  );
};

export default Footer;
