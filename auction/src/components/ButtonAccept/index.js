import React, {Component} from 'react';
import styled from "styled-components";


export default function ButtonAccept ({ title}){
    return(
        <button type="button" className="btn btn-success">{title}</button>
    )
}