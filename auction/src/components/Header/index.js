import React, {Component} from 'react';
import styled from "styled-components";

import HeaderButtons from "../HeaderButtons";

const DivHeader = styled.div`
width: 100%;
background: #F8F8F8;
min-height: 50px;
`
export default function Header ({title, data}){
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">  
            <a className="navbar-brand" href="#">{title}</a>
            <div className="navbar" id="navbarNav">
                <ul className="navbar-nav">
                {data.map((dataField, index) =>
                    <HeaderButtons {...dataField}></HeaderButtons>
                )}
                </ul>
            </div>
        </nav>
        
    )
}
/*{data.map((dataField, index) =>
    <li><a href="#"></a></li>
)}*/