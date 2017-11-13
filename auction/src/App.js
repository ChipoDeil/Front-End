import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import ListItem from './components/ListItem'
import HeaderButton from './components/HeaderButton'
import "./styles/main.css";
import styled from "styled-components"
import {BrowserRouter as Router,
        Route} from "react-router-dom"
import AuthPage from "./containers/AuthPage"
import LotSearchingPage from "./containers/LotSearchingPage"
import Cabinet from "./containers/Сabinet"
import FullLotInfoPage from "./containers/FullLotInfoPage"
import SearchField from "./components/SearchField"

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
    const bottomPoint = topPoint + 72;
    if(bottomPoint < 0){
      this.setState({headerIsSticky : true})
    }else{
      this.setState({headerIsSticky : false})
    }
    console.log(this.header.clientHeight);
  }

  componentDidMount () {
    if(this.header){
      window.addEventListener("scroll", this.onScroll, false)
    }
  }

  componentWillUnmount () {
    if(this.header){
      window.removeEventListener("scroll", this.onScroll, false)
    }
  }
  

  render() {
    return (
      <div className="App">
        <div ref={c => this.header = c}>
       <Header ref={(c) => this.header = c } isSticky = {this.state.headerIsSticky}>
        <HeaderButton title="Полный вид" src="info"/>
        <HeaderButton title="Личный кабинет" src="cabinet"/>
        <HeaderButton title="Авторизация" src="auth"/>
       <SearchField/>
       </ Header>
        <Router>
          <div>
          <Route exact path={'/'} component={LotSearchingPage} ></Route>
          <Route exact path={"/auth"} component={AuthPage} ></Route>
          <Route exact path={"/cabinet"} component={Cabinet} ></Route>
          <Route exact path={"/info"} component={FullLotInfoPage} ></Route>
          </div>
         </Router>
      </div>
      </div>
    );
  }
}

export default App;
