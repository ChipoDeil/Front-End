import React, {Component} from 'react';
import styled from "styled-components";


export default function ButtonPrimary ({title, ...props}){
    return(
        <button {...props} type="button" className="btn btn-primary">{title}</button>
    )
}