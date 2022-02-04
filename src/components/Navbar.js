import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (<div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">{props.contactText}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="/">Disabled</a>
            </li>
        </ul>
    </div>);
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    contactText: PropTypes.string.isRequired

};

Navbar.defaultProps = {
    title: 'Title',
    aboutText: 'About',
    contactText: 'Contact'
};