import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src="/assets/pro_img2.jpg" className="profile_img" alt=" " />
      <h1>
        <span>I am Mausd Rana, </span>Fullstack developer based in BD.
      </h1>
      <p>
        I'm a full-stack developer proficient in crafting comprehensive software
        solutions. Leveraging React.js for dynamic frontend experiences and
        Django, a robust Python framework, for powerful backend functionality, I
        engineer seamless applications that excel in performance, scalability,
        and user experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
