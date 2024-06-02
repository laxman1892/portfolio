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
          <Fade direction="up" delay={100} duration={400} triggerOnce>
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
            <Fade direction="left" delay={200}>
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
            <Fade cascade delay={200} damping={0.1} >
            ABOUT ME
            </Fade>
            </h1>
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
