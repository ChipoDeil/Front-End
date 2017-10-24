import React, {Component} from 'react';
import styled from "styled-components";


export default function ButtonPrimary ({ title}){
    return(
        <button type="button" className="btn btn-primary">{title}</button>
    )
}