import React from 'react';
import "./style.scss";
import { SiLinkedin, SiReact, SiRedux, SiPostgresql, SiSequelize, SiGithub, SiMongodb, SiLaravel, SiAngular } from "react-icons/si";
import { AiFillGitlab } from "react-icons/ai";
import { DiGit } from "react-icons/di";
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
                            <p>Mordu d'informatique depuis l'enfance, j'ai souhaité faire de ma passion un métier. Après huit années passées dans le monde de la santé, j'ai décidé prendre un nouveau cap professionnel et réaliser ce projet.</p>
                            <br />
                            <p>J'ai alors effectué une reconversion professionnelle à l'école du numérique O'clock. Ces six mois de formation intensive, m'ont permis d'acquerir un niveau de Développeur Junior Front-end et Back-end. Pour concrétiser mon projet, j'ai obtenu le titre professionnel de développeur Web et Web mobile. Par la suite souhaitant compléter ma formation et étant attentif aux bonnes pratiques du Web, j'ai passé et obtenu la certification Opquast.</p>
                            <br />
                            <p>Mon ancien domaine d'exercice ma permis d'être à l'écoute des autres et à faire preuve d'adaptabilité, je suis donc à l'aise dans un environnement de travail de type méthode Agile/Scrum.</p>
                            <br />
                            <p>Aujourd'hui je travaille au sein d'une équipe informatique dynamique depuis mars 2022 chez
                                GMS Group en constant distanciel. Je souhaiterai dorénavant
                                intégrer une équipe sur site pour regagner en contact humain tout en utilisant et développant
                                mes compétences.</p>
                            <br />
                            <a className="about__presentation__linkedin" title="Linkedin" href="https://www.linkedin.com/in/corentin-couzigou-0b200b175/"><SiLinkedin title="Linkedin" /></a>
                        </div>
                        <div className="wrapper__customButton__about">
                            <CustomButton type="button" link="/achievements" text="Mes réalisations" positionX={4} positionY={10} />
                        </div>
                        <div className="about__presentation__diploma">
                            <a target="_blank" className="card__diploma" title="Titre professionnel de développeur Web et Web mobile" href="https://drive.google.com/file/d/1MLVGYLdXbZ-ajYn2VnPR57j9S6eiJjfl/view?usp=sharing">
                                <GoMortarBoard />
                                <span>Titre professionnel</span>
                            </a>
                            <a target="_blank" title="Certification des bonnes pratiques et du vocabulaire Web" href="https://drive.google.com/file/d/1JQFwe6qscBmqDoVegHEUmYdIFNCewF-C/view?usp=sharing" rel="noopener noreferrer" className="card__diploma">
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

                        <div className="about__logo__container__column">
                            <div className="about__logo__container__image1">
                                <SiAngular />
                            </div><div className="about__logo__container__image1">
                                <SiReact />
                            </div>
                            <div className="about__logo__container__image1">
                                <SiRedux />
                            </div>
                            <div className="about__logo__container__image1">
                                <FaSass />
                            </div>
                            <div className="about__logo__container__image1">
                                <DiGit />
                            </div>
                        </div>
                        <div className="about__logo__container__column">
                            <div className="about__logo__container__image2">
                                <SiLaravel />
                            </div><div className="about__logo__container__image2">
                                <FaNode />
                            </div>
                            <div className="about__logo__container__image2">
                                <SiPostgresql />
                            </div>
                            <div className="about__logo__container__image2">
                                <SiSequelize />
                            </div>
                            <div className="about__logo__container__image2">
                                <AiFillGitlab />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;
