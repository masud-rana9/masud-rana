import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1> About me </h1>
        <img src="/assets/theme_pattern.svg" alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src="/assets/pro_img2.jpg" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Passionate full-stack developer proficient in crafting dynamic web
              applications using Django on the backend and React.js on the
              frontend. Experienced in backend development, data modeling,
              RESTful APIs, and database management with Django.
            </p>
            <p>
              Skilled at frontend development with React.js to create
              interactive user interfaces. Enthusiastic about creating
              efficient, scalable, and secure web solutions by leveraging the
              strengths of both Django and React.js to meet diverse project
              requirements.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScripts</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Django</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivments">
        <div className="about-achivement">
          <h1>01+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>10+</h1>
          <p>Happy clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
