import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import image from '../public/body-content.svg';
import arrow from '../public/down-arrow.svg';
// import ScrollReveal from "scrollreveal";
import { Fade } from "react-awesome-reveal";

function Body() {
  const location = useLocation();
  const [home, setHome] = useState(location.pathname === "/");
  const date = new Date().getFullYear();

  const screenWidth = document.documentElement.clientWidth
  console.log(screenWidth)

  function handleLinkClick() {
    setHome(false);
  }

  // useEffect(() => {
  //   ScrollReveal().reveal(".left-content", {
  //     // delay: 25,
  //     origin: "left",
  //     distance: "150px",
  //     duration: 1000,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal(".right-content", {
  //     // delay: 40,
  //     origin: "right",
  //     distance: "150px",
  //     duration: 1000,
  //     reset: true,
  //   });
  //   ScrollReveal().reveal('.header', {
  //     // delay: 10,
  //     duration: 800,
  //     scale: '0.05',
  //   });
  //   ScrollReveal().reveal('.about-header', {
  //     delay: 250,
  //     duration: 1000,
  //     origin: 'bottom',
  //     distance: '150px',
  //     reset: true,
  //   })
  // })

  return (
    <>
      <div className="header">
        <div className="glassmorph-header">
          <Fade direction="up" delay={100} duration={1000} triggerOnce>
        <div className="menu-bar">
          <div>
            <NavLink
              className="menu"
              to="/"
              onClick={() => (!home ? setHome(true) : null)}
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink className="menu" to="/projects" onClick={handleLinkClick}>
              Projects
            </NavLink>
          </div>
          <div>
            <NavLink className="menu" to="/contact" onClick={handleLinkClick}>
              Contact
            </NavLink>
          </div>
        </div>
        </Fade>
        </div>
        
      </div>
      {home && (
        <div className="body-content container">
          <div className="content scroll-content">
            <Fade direction={`${screenWidth <= 576 ? "up" : "left" }`} delay={200}>
            <div className="left-content">
              <p>HI, MY NAME IS</p>
              <h1>LAXMAN RIJAL.</h1>
              <h1>I BUILD THINGS FOR THE WEB.</h1>
              <p>
                I&apos;m a full stack developer specializing in designing and
                building beautiful web experiences.
              </p>
            </div>
            </Fade>
            <Fade direction="right" delay={600}>
            <div className="right-content">
              <img src={image} draggable="false" />
            </div>
            </Fade>
            <div className="scroll-image">
            <Fade delay={1000} direction="up" duration={700}>
              <img src={arrow} draggable="false" />
            </Fade>
          </div>
          </div>
          
          <div className="about scroll-content">
            <h1 className="about-header">
            <Fade cascade delay={200} damping={0.05} >
            ABOUT ME
            </Fade>
            </h1>
              <div className="about-content">
                  <div className="about-left">
                  <Fade cascade damping={0.5} direction="left" delay={500}>
                    <h2>Get to know me!</h2>
                    <p>
                    I am a recent graduate in Bachelor in Electronics, Communication and Information Technology Engineering. With a profound interest in web development, I am able to create dynamic, responsive and interactive web applications.
                    </p>
                    <p>
                    I have developed a strong foundation in full-stack development, particularly emphasizing front-end technologies. My passion for web development is driven by the desire to build innovative solutions that enhance user experiences and meet real-world challenges.
                  </p>
                  <p>
                    As a recent graduate, I&apos;m actively seeking opportunities where I can apply my skills to real-world projects, contribute to innovative teams, and continue learning in a fast-paced environment. I&apos;m always eager to expand my skill set and explore new technologies that align with my professional growth as I also possess basic knowlegde in Python.
                  </p>
                  </Fade>
                  </div>
                  <div className="about-right">
                  <Fade cascade damping={0.5} direction="right" delay={1000}>
                    <h2>Skills</h2>
                    <div className="skills-content">
                      <p>HTML</p>
                      <p>CSS</p>
                      <p>Javascript</p>
                      <p>React</p>
                      <p>Node</p>
                      <p>Express</p>
                      <p>Mongo</p>
                      <p>Github</p>
                      <p>Responsive Design</p>
                    </div>
                    </Fade>
                  </div>
              </div>
          </div>
        </div>
      )}
      <Outlet />
      <footer>
        <div className="body-content footer">
          <div className="left-footer">
            <p>Laxman Rijal &copy; {date}. All Rights Reserved. </p>
          </div>
          <div className="right-footer">
            <a className="link" href="https://www.linkedin.com/in/laxman-rijal">
              LinkedIn
            </a>
            <a className="link" href="https://www.github.com/laxman1892">
              GitHub
            </a>
            <a className="link" href="mailto:laxman.rijal1892@gmail.com">
              Mail
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Body;
