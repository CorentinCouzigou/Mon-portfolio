import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import './CustomButton.scss';

export default function CustomButton({ link, text, type }) {

    return (
        <>
            <Link className="custom__button__link" to={link} ><button type={type} className="custom__button custom__button--seeMore">{text}
                <div className="wrapper__arrow">
                    <MdOutlineArrowForwardIos className="arrow arrow--1" />
                    <MdOutlineArrowForwardIos className="arrow arrow--2" />
                    <MdOutlineArrowForwardIos className="arrow arrow--3" />
                </div>
            </button></Link>
        </>
    );
}
CustomButton.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}
