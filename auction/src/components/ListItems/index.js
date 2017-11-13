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

export default class ListItems extends Component {
    
    constructor (props){
        super(props)
        this.state = {
            time: props.time
        }
        this.onMoreButtonClick = this.onMoreButtonClick.bind(this);
    }

    onMoreButtonClick(){
        this.setState({time: this.state.time + 1})
    }
    
    render(){
        return(
            <li className="list-group-item">
                <Image src={this.props.src}/>
            <Container>
            <TextHolder>{this.props.text}</TextHolder>
            <TextHolder>{this.state.time}</TextHolder>
            <ButtonPrimary onClick={this.onMoreButtonClick} title="More"/>
            </Container>
            </li>
        )
    }

}