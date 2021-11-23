import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';
function NotFound() {

    return (
        <div className="NotFound">
            <span className="notFound__404">404</span>
            <Link to="/"><span className="notfound__home">Retour à la page d'accueil</span></Link>
        </div>
    )
}
export default NotFound;