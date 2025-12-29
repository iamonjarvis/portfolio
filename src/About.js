import { Fade } from "react-awesome-reveal";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import profile from "./assets/iamsahilpatra.png";
import { useEffect, useState } from "react";

const About = () => {
  const [randomZ, setRandomZ] = useState(0);
  useEffect(() => {
    const define = Math.ceil(Math.random() * 100);
    if (define % 2) {
      setRandomZ(-1);
    } else {
      setRandomZ(1);
    }
  }, []);

  const frontendTechs = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Redux"];
  const backendTechs = ["Node.js", "MongoDB", "SQL"];
  const tools = ["Git", "Postman", "C++", "Python"];

  return (
    <div className="session-wrapper">
      <ParallaxProvider>
        <Fade direction="down" fraction={0.3}>
          <div className="about">
            <h2 className="title">~ about-me</h2>
            <span className="bio">
              I'm an Indian-based <strong className="orange">full-stack developer</strong> who loves to develop and create new things. I enjoy solving complex problems through coding and continuously strive to improve my skills.
            </span>
            <span className="bio">
              I have knowledge and hands-on experience in both <strong className="orange">frontend</strong> and <strong className="orange">backend</strong> development, with a passion for building efficient, scalable, and user-friendly applications.
            </span>
            <span className="bio">I specialize in the following technologies:</span>
            <div className="techs">
              <h4>Frontend</h4>
              {frontendTechs.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="techs">
              <h4>Backend</h4>
              {backendTechs.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="techs">
              <h4>Tools</h4>
              {tools.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <span className="bio" style={{ marginTop: "10px" }}>
              As a developer, I strive to create clean, maintainable, and scalable code while constantly learning and staying up-to-date with the latest trends in technology.
            </span>
            <span className="bio">
              In my free time, I enjoy playing guitar and gaming, particularly in Valorant, Chess, and League of Legends.
            </span>
          </div>
        </Fade>
        <Parallax className="photos" speed={-17}>
          <div
            className="ball"
            style={{
              bottom: 0,
              left: 0,
              marginBottom: "-50px",
              marginLeft: "-50px",
              zIndex: randomZ,
            }}
          />
          <div
            className="ball"
            style={{
              top: 0,
              right: 0,
              marginTop: "-50px",
              marginRight: "-50px",
              zIndex: randomZ * -1,
            }}
          />
          <div className="photo-wrapper">
            <img src={profile} alt="" />
          </div>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default About;
