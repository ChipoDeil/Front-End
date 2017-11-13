import React, {Component} from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

class ButtonAccept extends Component {
    render() {
      return (
        <button type="button" className="btn btn-success">{this.props.title}</button>
      );
    }
  }

ButtonAccept.defaultProps = {
    title: "Button"
}
ButtonAccept.propTypes = {
    title: PropTypes.string
}
export default ButtonAccept;