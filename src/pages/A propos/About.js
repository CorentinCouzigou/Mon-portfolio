import React from 'react';
import "./style.scss";
import { SiLinkedin, SiReact, SiRedux, SiPostgresql, SiSequelize, SiGithub, SiMongodb } from "react-icons/si";
import { FaNode, FaSass } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { GoMortarBoard } from "react-icons/go";
import CustomButton from "../../components/CustomButton/CustomButton";
function About() {
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__presentation">
                    <div className="about__presentation__hello">
                        <div className="about__presentation__hello__line"> </div>{" "}
                        <span className="about__presentation__span">Qui je suis ? </span>
                    </div>
                    <div className="about__presentation__container">
                        <div className="about__presentation__text">
                            <h1>Mon parcours</h1>
                            <br />
                            <p>Mordu d'informatique depuis tout jeune j'ai décidé de faire de ma passion un métier. Après 8 années passées dans le monde de la santé, J'ai décidé de prendre un nouveau cap professionnel et de réaliser ce projet.</p>
                            <br />
                            <p>J'ai donc réalisé une reconversion professionnelle à l'école du numérique O'clock. Après ces 6 mois de formations intensives, j'en ressors avec un niveau de Développeur Junior Front-end et Back-end. Par la suite afin de concrétiser mon projet, j'ai obtenu mon titre professionnel de développeur web et web mobile. Étant attentif aux bonnes pratiques du web, surtout en matière d'accessibilité, il était import à mes yeux d'obtenir la certification Opquast.</p>
                            <br />
                            <p>Mon ancien domaine d'exercice ma permis d'être à l'écoute des autres et à faire preuve de d'adaptabilité, je suis donc à l'aise dans un environnement de travail de type méthode Agile/Scrum.</p>
                            <br />
                            <p>Désireux d'enrichir constamment mes connaissances, je souhaite mettre mes compétences  au sein d'une équipe dynamique.</p>
                            <br />
                            <a className="about__presentation__linkedin" href="https://www.linkedin.com/in/corentin-couzigou-0b200b175/"><SiLinkedin /></a>
                        </div>
                        <div className="wrapper__customButton__about">
                            <CustomButton type="button" link="/achievements" text="Mes réalisations" positionX={4} positionY={10} />
                        </div>
                        <div className="about__presentation__diploma">
                            <a href="https://drive.google.com/file/d/1JQFwe6qscBmqDoVegHEUmYdIFNCewF-C/view?usp=sharing" className="card__diploma">
                                <GoMortarBoard />
                                <span>Titre professionnel</span>
                            </a>
                            <a href="https://drive.google.com/file/d/1JQFwe6qscBmqDoVegHEUmYdIFNCewF-C/view?usp=sharing" className="card__diploma">
                                <GiDiploma />
                                <span>Certification Opquast</span>
                            </a>
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
                                <SiMongodb />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;
