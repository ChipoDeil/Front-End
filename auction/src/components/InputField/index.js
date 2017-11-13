import React, {Component} from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

export default class InputField extends Component {
    render() {
      return (
        <div className="form-group">
            <label for="inputEmail">{this.props.field}</label>
            <input type={this.props.type} className="form-control" id="inputEmail" placeholder={this.props.field}/>
        </div>
      );
    }
}
InputField.defaultProps = {
    field: "login",
    type: "text"
}
InputField.propTypes = {
    field: PropTypes.string,
    type:  PropTypes.string
}