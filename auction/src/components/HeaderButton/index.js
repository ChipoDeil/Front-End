import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default function HeaderButton ({title, src}){
    return(
        <li className="nav-item active">
        <a className="nav-link" href={src}>{title}<span className="sr-only">(current)</span></a>
        </li>
    )
}

HeaderButton.defaultProps = {
    title: "Button",
    src: "#"
}
HeaderButton.propTypes = {
    title: PropTypes.string,
    src:  PropTypes.string
}