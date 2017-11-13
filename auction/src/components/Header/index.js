import React, {Component} from 'react';
import styled from "styled-components";

import HeaderButton from "../HeaderButton";
import PropTypes from 'prop-types';


const DivHeader = styled.div`
z-index: 100;
width: 100%;
background: #0A3663;
min-height: 50px;
position: ${props => props.isSticky ? "fixed;" : "relative;"}
top: 0;
left: 0;
`
export default class Header extends Component{
    render(){
        return(
            <DivHeader isSticky={this.props.isSticky}>
            <nav className="navbar navbar-dark bg-faded">
                <a className="navbar-brand" href="/">{this.props.title}</a>
                <div className="navbar" id="navbarNav">
                <ul className="navbar-nav">
                    {this.props.children}
                </ul>
                </div>
            </nav>
            </DivHeader>
        )
    }
}

Header.defaultProps = {
    title : "Lot Site"
}
Header.propTypes = {
    title : PropTypes.string
}