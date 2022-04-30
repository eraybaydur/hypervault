import React, { useRef } from "react";
import "./HeroSection.css";
import "animate.css";
import TypeWriterEffect from "react-typewriter-effect";
import video from "./purplesecurity2.mp4";

const HeroSection = () => {
  const myAppRef = document.querySelector(".scrollable-div");

  return (
    <div className="hero">
      <video autoPlay loop muted>
        <source src={video} />
      </video>
      <div className="upper-text animate__animated animate__fadeInDown">
        <h3>Auto-staking enhanced with boosted APY for locking your tokens.</h3>
      </div>
      <div className="hero-text">
        <h1 className="animate__animated animate__zoomIn">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Exo 2",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.5em",
            }}
            startDelay={1000}
            cursorColor="purple"
            multiText={["  Lock.", "  Earn.", "Relock.", "Repeat."]}
            multiTextDelay={1000}
            typeSpeed={30}
            multiTextLoop={true}
          />
        </h1>
        <p>
          Welcome to <span style={{ color: "#02a780", fontWeight:"600" }}>HyperVault</span>, the
          latest and most enhanced project derived from the immensely successful
          Titano and Safuu protocols.
        </p>
        <div className="hero__links">
          <a id="launchapp-btn" href="#">
            Dashboard
          </a>
          <a href="#">Learn more &rsaquo;</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
