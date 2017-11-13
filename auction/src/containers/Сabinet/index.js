import React, { Component } from 'react';
import List from '../../components/List';
import PropTypes from "prop-types";
import styled from "styled-components";
import BasicPanel from "../../components/BasicPanel"
import ListItem from "../../components/ListItem";
import ButtonReject from "../../components/ButtonReject";
import ButtonPrimary from "../../components/ButtonPrimary";


const Container = styled.div`
margin: 0 auto;
margin-top: 2%;
width:95%;
`

const ButtonContainer = styled.span`
margin-left: 2%;
`
const LeftPanel = styled.div`
`

class Cabinet extends Component {
  render() {
    return (
      <Container>
      <BasicPanel title="Управление">
        <ButtonContainer>
        <ButtonPrimary title="Кнопка"/>
        </ButtonContainer>
        <ButtonContainer>
        <ButtonPrimary title="Кнопка"/>
        </ButtonContainer>
        <ButtonContainer>
        <ButtonPrimary title="Кнопка"/>
        </ButtonContainer>
        <ButtonContainer>
        <ButtonReject title="Выйти"/>
        </ButtonContainer>
      </BasicPanel>
      <BasicPanel title="Текущие лоты">
        <List>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </List>
      </BasicPanel>
      </Container>
    );
  }
}

export default Cabinet;
