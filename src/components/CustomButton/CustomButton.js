import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CustomButton.scss';

export default function CustomButton({ link, text }) {
    return (
        <div className="customButton__wrap">
            <Link to={link}><button className="customButton__wrap__link">{text}</button></Link>
        </div>
    );
}
CustomButton.propTypes = {
    link: PropTypes.string.isRequired,
}
