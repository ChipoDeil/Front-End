import React, {Component} from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import imageFile from '../../Images/default.png';

class BasicCard extends Component {
    render() {
      return (
            <div class="card card-cascade wider reverse my-4">

                <div class="view overlay hm-white-slight">
                    <img src={this.props.image} class="img-fluid"/>
                    <a href="#!">
                        <div class="mask"></div>
                    </a>
                </div>

                <div class="card-body text-center">
                    <h4 class="card-title"><strong>{this.props.title}</strong></h4>
                    <p class="card-text">{this.props.text}</p>
                    <p class="card-text"><small class="text-muted">{this.props.date}</small></p>
                </div>
            {this.props.children}
            </div>

      );
    }
}
BasicCard.defaultProps = {
    title: "Some Title",
    text: "some textsome textsome textsome textsome textsomsome textsome textsome textsome text",
    date: "15.11.2017 18:03:05",
    image: imageFile
}
BasicCard.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.image
}

export default BasicCard;