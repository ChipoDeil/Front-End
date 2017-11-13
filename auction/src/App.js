import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import ListItem from './components/ListItems'
import HeaderButton from './components/HeaderButtons'
import "./bootstrap.css";
import styled from "styled-components"
import {BrowserRouter as Router,
        Route} from "react-router-dom"
import AuthPage from "./containers/AuthPage"
import LotSearchingPage from "./containers/LotSearchingPage"

const data = new Array(30).fill(1).map((x, i) => ({
  text: 'lot ' + i,
  time: i
}))

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      headerIsSticky: false
    }
    this.onScroll = this.onScroll.bind(this)
  }
  
  onScroll(){
    const topPoint = this.header.getClientRects()["0"].y;
    const bottomPoint = topPoint + this.header.clientHeight;
    if(bottomPoint < 0){
      this.setState({headerIsSticky : true})
    }else{
      this.setState({headerIsSticky : false})
    }
    console.log(topPoint);
  }

  componentDidMount () {
    if(this.header){
      window.addEventListener("scroll", this.onScroll)
    }
  }

  componentWillUnmount () {
    if(this.header){
      window.removeEventListener("scroll", this.onScroll)
    }
  }
  

  render() {
    return (
      <div className="App">
        <div ref={c => this.header = c}>
       <Header ref={(c) => this.header = c } isSticky = {this.state.headerIsSticky}>
        <HeaderButton title="das" />
        <HeaderButton title="asdsass" />
       </ Header>
        <Router>
          <div>
          <Route exact path={'/'} component={LotSearchingPage} ></Route>
          <Route exact path={"/auth"} component={AuthPage} ></Route>
          </div>
         </Router>
      </div>
        </div>
    );
  }
}

export default App;
