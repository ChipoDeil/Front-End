import React, { Component } from 'react';
import List from '../../components/List';
import PropTypes from "prop-types";

const propTypes = {}

const defaultTypes = {}

const data = new Array(30).fill(1).map((x, i) => ({
  text: 'lot ' + i,
  time: i
}))

class AuthPage extends Component {
  render() {
    return (
      <div>
          auth
      </div>
    );
  }
}

export default AuthPage;
