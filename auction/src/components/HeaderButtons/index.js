import React, {Component} from 'react';
import styled from "styled-components";


export default function HeaderButtons ({title, src}){
    return(
        <li className="nav-item active">
        <a className="nav-link" href={src}>{title}<span className="sr-only">(current)</span></a>
        </li>
    )
}
