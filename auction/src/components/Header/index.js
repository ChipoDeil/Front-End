import React, {Component} from 'react';
import styled from "styled-components";

import HeaderButtons from "../HeaderButtons";

const DivHeader = styled.div`
z-index: 100;
width: 100%;
background: #eee;
min-height: 50px;
position: ${props => props.isSticky ? "fixed;" : "relative;"}
top: 0;
left: 0;
`
export default class Header extends Component{
    render(){
        return(
            <DivHeader isSticky={this.props.isSticky}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">  
                <a className="navbar-brand" href="#">{this.props.title}</a>
                <div className="navbar" id="navbarNav">
                    {this.props.children}
                </div>
            </nav>
            </DivHeader>
        )
    }
    
}
