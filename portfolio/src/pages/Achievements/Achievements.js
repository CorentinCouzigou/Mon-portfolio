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
                    <li key="All" className={achievements.length === achievementsData.length ? "select" : ""} onClick={() => setAchievements(achievementsData)}>All</li>
                    <li key="Front" className={achievements.every(element => element.nature === "Front") && "select"} onClick={() => setAchievements(achievementsData.filter(element => element.nature === "Front"))}>Front</li>
                    <li key="back" className={achievements.every(element => element.nature === "Back") && "select"} onClick={() => setAchievements(achievementsData.filter(element => element.nature === "Back"))}>Back
                    </li>
                </ul>
                <div className="achievements__cards__container">
                    {achievements.map((item) => {
                        return (
                            <div key={item.title} className="card" style={{ backgroundImage: `url(${item.image}) ` }}>
                                <a className="card__overlay" href={item.link}><p>
                                    {item.title}<br />
                                    <br />
                                    {item.desc}
                                </p></a>
                                <div className="card__tag">
                                    {item.nature}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Achievements;
