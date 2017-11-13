import React, { Component } from 'react';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
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
      <List>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </List>
    );
  }
}

export default LotSearchingPage;

const dataDef = new Array(30).fill(1).map((x, i) => ({
  text: 'lot ' + i,
  time: i
}))