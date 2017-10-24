import React, {Component} from 'react';
import styled from "styled-components";

import ButtonPrimary from "../ButtonPrimary";


const Image = styled.img`
max-width: 200px;
border-radius: 2px;
`

const TextHolder = styled.div`
margin: 0 2%;
font-size: 25px;
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width:80%;
`


export default function ListItems ({text, src, time}){
    return(
        <li className="list-group-item">
            <Image src={src}/>
        <Container>
        <TextHolder>{text}</TextHolder>
        <TextHolder>{time}</TextHolder>
        <ButtonPrimary title="More"/>
        </Container>
        </li>
        
    )
}
