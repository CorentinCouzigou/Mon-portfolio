/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useRef } from "react";
import "./style.scss";
import CustomButton from "../../components/CustomButton/CustomButton";
import Typewriter from "typewriter-effect";
import Loading from '../../components/Loading/Loading';
import homeData from './homeData';

function Accueil() {
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current > 0) {
      setLoading(false);
    }
  }
  return (
    <>
      <div style={{ display: loading ? "block" : "none" }}>
        <Loading />
      </div>
      <div style={{ display: loading ? "none" : "flex" }} className="home">
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
              <a target="_blank" title="Curriculum Vitae" href="https://drive.google.com/file/d/1dFiCe3jcN9HXG8rHOURYR2E73hJQry9K/view?usp=sharing"><button className="home__presentation__button"> Mon CV </button></a>
            </div>{" "}
            <div className="wrapper__customButton__home">
              <CustomButton type="button" link="/about" text="En savoir plus" />
            </div>
          </div>
          <div className="home__image">
            {homeData.map((item) => {
              return (
                <img onLoad={imageLoaded} key={item.id} className="home__image__photo" src={item.image} alt={item.description} />)
            })}
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default Accueil;
