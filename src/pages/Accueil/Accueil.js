/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from 'react-router-dom';
import "./style.scss";
import CustomButton from "../../components/CustomButton/CustomButton";
import Typewriter from "typewriter-effect";

function Accueil() {
  return (
    <div className="home" onScroll={() => console.log('yo')}>
      <div className="home__container">
        <div className="home__presentation">
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
            {/* <CustomButton link="/about" text="En savoir plus" /> */}
          </div>{" "}
        </div>
        <div className="home__image"></div>
      </div>{" "}
    </div>
  );
}

export default Accueil;
