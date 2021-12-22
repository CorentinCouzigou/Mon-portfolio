import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';
function NotFound() {

    return (
        <div className="notFound">
            <div className="notFound__container">
                <span className="notFound__container__404">Error 404</span>
                <div className="wrap">
                    <Link to="/"><button className="notFound__button">Retour à la page d'accueil</button></Link>
                </div>
            </div>
        </div>
    )
}
export default NotFound;