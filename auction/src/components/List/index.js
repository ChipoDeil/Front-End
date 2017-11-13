import React, {Component} from 'react';
import styled from "styled-components";

export default class List extends Component{
    render(){
        return(
            <ul className="list-group">
                {this.props.children}
            </ul>
        )
    }
}