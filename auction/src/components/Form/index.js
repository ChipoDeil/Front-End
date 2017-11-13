import React, {Component} from 'react';
import styled from "styled-components";

import InputField from "../InputField";
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    return (
        <form>
        {this.props.children}
        <div className="checkbox">
            <label><input type="checkbox"/>Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary btn-block">{this.props.text}</button>
       </form>
    );
  }
}
Form.defaultProps = {
    title: "Авторизация",
    text: "Войти"
}
Form.propTypes = {
    title: PropTypes.string,
    text:  PropTypes.string
}

export default Form;
