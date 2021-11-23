import React from 'react';
import "./style.scss";
import { SiLinkedin, SiReact, SiRedux, SiPostgresql, SiSequelize, SiGithub } from "react-icons/si";
import { FaNode, FaSass, FaGitSquare } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { GoMortarBoard } from "react-icons/go";
function About() {
    return (
        <div id="about" >
            <div className="about">
                <div className="about__container">
                    <div className="about__presentation">
                        <div className="about__presentation__hello">
                            <div className="about__presentation__hello__line"> </div>{" "}
                            <span className="about__presentation__span">Qui je suis ? </span>
                        </div>
                        <div className="about__presentation__container">
                            <div className="about__presentation__text">
                                <h1>lorem</h1><br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laudantium quasi alias maxime exercitationem quidem, ratione culpa accusantium excepturi cum debitis modi ut doloremque eaque quia, enim cupiditate est id.</p>

                                <a className="about__presentation__linkedin" href="https://www.linkedin.com/in/corentin-couzigou-0b200b175/"><SiLinkedin /></a>
                            </div>
                            <div className="about__presentation__diploma">
                                <div className="card__diploma">
                                    <GoMortarBoard />
                                    <span>Titre professionnel</span>
                                </div>
                                <div className="card__diploma">
                                    <GiDiploma />
                                    <span>Certification Opquast</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__logo">
                        <div className="about__presentation__hello">
                            <div className="about__presentation__hello__line"> </div>{" "}
                            <span className="about__presentation__span">Ce que je fais ?</span>
                        </div>
                        <div className="about__logo__container">
                            <div className="about__logo__container__column"> <div className="about__logo__container__image1">
                                <SiReact />
                            </div>
                                <div className="about__logo__container__image1">
                                    <SiRedux />
                                </div>
                                <div className="about__logo__container__image1">
                                    <FaSass />
                                </div>
                                <div className="about__logo__container__image1">
                                    <SiGithub />
                                </div>
                            </div>
                            <div className="about__logo__container__column"> <div className="about__logo__container__image2">
                                <FaNode />
                            </div>
                                <div className="about__logo__container__image2">
                                    <SiPostgresql />
                                </div>
                                <div className="about__logo__container__image2">
                                    <SiSequelize />
                                </div>
                                <div className="about__logo__container__image2">
                                    <FaGitSquare />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;