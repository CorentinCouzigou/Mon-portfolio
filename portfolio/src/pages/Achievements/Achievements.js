/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./style.scss";

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
                    <div className="card">

                        <div className="card__overlay">

                        </div>
                    </div>
                    <div className="card">

                        <div className="card__overlay">

                        </div>
                    </div>
                    <div className="card">
                        <div className="card__overlay">
                            <a href="https://drive.google.com/file/d/1yKCGihIOdV57gnlghPC1SP4WcPDF2ZHp/view?usp=sharing"><p>hello word</p></a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="overlay"></div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Achievements;
