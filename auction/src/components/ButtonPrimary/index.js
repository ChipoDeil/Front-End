import React, {Component} from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

class ButtonPrimary extends Component {
    render() {
      return (
        <button type="button" className="btn btn-primary">{this.props.title}</button>
      );
    }
  }

  ButtonPrimary.defaultProps = {
    title: "Button"
}
ButtonPrimary.propTypes = {
    title: PropTypes.string
}
export default ButtonPrimary;