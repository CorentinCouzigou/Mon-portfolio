/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import "./achievements.scss";
import { achievementsData } from './achievementsData';


function Achievements() {
    const [achievements, setAchievements] = useState(achievementsData);
    return (
        <div className="achievements">
            <div className="achievements__container">
                <div className="achivements__title">
                    <div className="achievements__presentation">
                        <div className="achievements__presentation__line"> </div>{" "}
                        <span className="achievements__presentation__span">Mes réalisations</span>
                    </div>
                </div>
                <ul className="liste">
                    <li key="all" className={achievements.length === achievementsData.length ? "select" : ""} onClick={() => setAchievements(achievementsData)}>All</li>
                    <li key="front" className={achievements.every(element => element.nature === "front") && "select"} onClick={() => setAchievements(achievementsData.filter(element => element.nature === "front"))}>Front</li>
                    <li key="back" className={achievements.every(element => element.nature === "back") && "select"} onClick={() => setAchievements(achievementsData.filter(element => element.nature === "back"))}>Back
                    </li>
                </ul>
                <div className="achievements__cards__container">
                    {achievements.map((item) => {
                        return (
                            <div key={item.title} className={item.nature !== "back" ? "card" : "card back"} style={{ backgroundImage: `url(${item.image}) ` }}>
                                {/* <img className="card__img" src={item.image} alt="photo" /> */}
                                <a className="card__overlay" href={item.link} > <p>
                                    {item.title}<br />
                                    <br />
                                    {item.desc}
                                </p></a>
                            </div>
                        )
                    })}
                </div>

            </div >
        </div >
    )
}

export default Achievements;
