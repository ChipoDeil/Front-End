import React, {Component} from 'react';
import styled from "styled-components";


export default function ButtonReject ({ title}){
    return(
        <button type="button" className="btn btn-danger">{title}</button>
    )
}