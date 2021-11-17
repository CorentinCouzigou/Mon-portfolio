/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./style.scss";
import { achievementsData } from './achievementsData';

function Achievements() {
    return (
        <div className="achievements">
            <div className="achievements__container">
                <div className="achivements__title">
                    <div className="achievements__presentation">
                        <div className="achievements__presentation__line"> </div>{" "}
                        <span className="achievements__presentation__span">Mes réalisations</span>
                    </div>
                </div>
                <div className="achievements__cards__container">
                    {achievementsData.map((item) => {
                        return (
                            <div className="card">
                                <img src={item.image} alt="photo" />

                                <a className="card__overlay" href={item.link}><p>
                                    {item.title}<br />
                                    {item.desc}
                                </p></a>

                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Achievements;
