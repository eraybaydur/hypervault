import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import twitter from './twitter-48.png';
import facebook from './facebook-2-48.png';
import discord from './discord-2-48.png';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="contact">
          <h1>Connect with us &rsaquo;</h1>
          <div className="social-media">
            <a href="https://twitter.com" target='_blank'>
            <img src={twitter}/>
            </a>
            <a href="https://facebook.com" target='_blank'>
            <img src={facebook}/>
            </a>
            <a href="https://twitter.com" target='_blank'>
            <img src={discord}/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
