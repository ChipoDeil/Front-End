import React, { Component } from 'react';
import List from '../../components/List';
import PropTypes from "prop-types";

const propTypes = {}

const defaultTypes = {}

const data = new Array(30).fill(1).map((x, i) => ({
  text: 'lot ' + i,
  time: i
}))

class LotSearchingPage extends Component {

  render() {
    return (
      <div>
          search
      </div>
    );
  }
}

export default LotSearchingPage;
