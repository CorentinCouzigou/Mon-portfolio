/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useRef } from 'react';
import "./achievements.scss";
import { achievementsData } from './achievementsData';
import CustomButton from "../../components/CustomButton/CustomButton";
import Loading from '../../components/Loading/Loading';
import { SiNetlify, SiGithub } from "react-icons/si";

function Achievements() {

    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= achievementsData.length) {
            setLoading(false);
        }
    }

    const [achievements, setAchievements] = useState(achievementsData);
    let classNameForAll = "";
    let classNameForFront = "";
    let classNameForBack = "";
    if (achievements.length === achievementsData.length) {
        classNameForAll = "select";
    }
    if (achievements.every(element => element.nature === "Front")) {
        classNameForFront = "select";
    }
    if (achievements.every(element => element.nature === "Back")) {
        classNameForBack = "select";
    }

    return (
        <>
            <div style={{ display: loading ? "block" : "none" }}>
                <Loading />
            </div>
            <div style={{ display: loading ? "none" : "flex" }} className="achievements">
                <div className="achievements__container">
                    <div className="achivements__title">
                        <div className="achievements__presentation">
                            <div className="achievements__presentation__line"> </div>{" "}
                            <span className="achievements__presentation__span">Mes réalisations d'études.</span>
                        </div>
                    </div>
                    <ul className="liste">
                        <li key="All" className={classNameForAll} onClick={() => setAchievements(achievementsData)}>All</li>
                        <li key="Front" className={classNameForFront} onClick={() => setAchievements(achievementsData.filter(element => element.nature === "Front"))}>Front</li>
                        <li key="back" className={classNameForBack} onClick={() => setAchievements(achievementsData.filter(element => element.nature === "Back"))}>Back
                        </li>
                    </ul>
                    <div className="wrapper__customButton__contact">
                        <CustomButton className="wrapper__customButton__contact__button" type="button" link="/contact" text="Me contacter" />
                    </div>
                    <div className="achievements__cards__container">
                        {achievements.map((item) => {
                            return (
                                <div key={item.id} className="card">
                                    <img onLoad={imageLoaded} className="card__image" src={item.image} alt={item.id} />
                                    <div className="card__overlay" ><p>
                                        {item.title}<br />
                                        <br />
                                        {item.desc}
                                    </p>
                                        <div className="card__overlay__links">
                                            <a className="card__overlay__link" target="_blank" title="Github" rel="noopener noreferrer" href={item.link}><SiGithub /></a>
                                            {item.deployment ? <a className="card__overlay__link" target="_blank" title="Déploiement" rel="noopener noreferrer" href={item.deployment}><SiNetlify /></a> : ""}
                                        </div>
                                    </div>
                                    <div className="card__tag">
                                        {item.nature}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )

}

export default Achievements;
