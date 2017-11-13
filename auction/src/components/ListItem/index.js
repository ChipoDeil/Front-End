import React, {Component} from 'react';
import styled from "styled-components";

import ButtonPrimary from "../ButtonPrimary";
import imageFile from '../../Images/default.png';
import PropTypes from 'prop-types';

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
width:80%;`

export default class ListItem extends Component {
    
    constructor (props){
        super(props)
        this.state = {
            time: props.time
        }
        this.onMoreButtonClick = this.onMoreButtonClick.bind(this);
    }

    onMoreButtonClick(){
        //this.setState({time: this.state.time + 1})
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

ListItem.defaultProps = {
    src: imageFile,
    text: "information about lot",
    time: "15.11.2017 18:30:05"
}
ListItem.propTypes = {
    src: PropTypes.Image,
    text: PropTypes.string,
    time: PropTypes.string
}
