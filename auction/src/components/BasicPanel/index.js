import React, {Component} from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

class BasicPanel extends Component {
    render() {
      return (
            <div class="panel panel-default">
                <div class="panel-heading">{this.props.title}</div>
                <div class="panel-body">{this.props.children}</div>
            </div>
      );
    }
}
BasicPanel.defaultProps = {
    title: "Head",
}
BasicPanel.propTypes = {
    title: PropTypes.string
}

export default BasicPanel;