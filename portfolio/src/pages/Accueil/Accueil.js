/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.scss";
import Typewriter from "typewriter-effect";

function Accueil() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__presentation">
          {/* <Particles
            id="tsparticles"
            canvasClassName="canvasParticles"
            className="tsparticles"
            options={{
              fullScreen: {
                enable: false,
              },
              background: {
                color: {
                  value: "",
                },
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },

                  repulse: {
                    distance: 50,
                    duration: 2,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ff0000",
                },
                links: {
                  color: "",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  value: 20,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 20,
                },
              },
              detectRetina: true,
            }}
          />{" "} */}
          <div className="home__presentation_logo"></div>{" "}
          <div className="home__presentation__container">
            <div className="home__presentation__hello">
              <div className="home__presentation__hello__line"> </div>{" "}
              <span className="home__presentation__span">Bonjour, je suis</span>
            </div>{" "}
            <h1 className="home__presentation__name glitch" data-text="glitch" > Corentin Couzigou </h1>{" "}
            <div className="home__presentation__devContainer">
              <p className="home__presentation__dev"> Développeur </p>{" "}
              <Typewriter
                className="home__presentation__typewriter"
                options={{
                  autoStart: true,
                  loop: true,
                  pauseFor: 1500,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Web")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("React")
                    .pauseFor(1200)
                    .deleteAll()
                    .typeString("Node")
                    .pauseFor(1200)
                    .deleteAll()
                    .start();
                }}
              />{" "}
            </div>{" "}
            <br />
            <a href="https://drive.google.com/file/d/1yKCGihIOdV57gnlghPC1SP4WcPDF2ZHp/view?usp=sharing"><button className="home__presentation__button"> Mon CV </button></a>
          </div>{" "}
          <div className="home__presentation__logo"></div>{" "}
        </div>
        <div className="home__image"></div>
      </div>{" "}
    </div>
  );
}

export default Accueil;
