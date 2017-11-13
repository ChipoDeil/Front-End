import React, {Component} from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

class ButtonReject extends Component {
    render() {
      return (
        <button type="button" className="btn btn-danger">{this.props.title}</button>
      );
    }
  }

ButtonReject.defaultProps = {
    title: "Button"
}
ButtonReject.propTypes = {
    title: PropTypes.string
}
export default ButtonReject;