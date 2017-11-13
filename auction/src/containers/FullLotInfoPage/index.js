import React, { Component } from 'react';
import List from '../../components/List';
import PropTypes from "prop-types";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import styled from "styled-components";
import BasicCard from "../../components/BasicCard";
import ButtonAccept from "../../components/ButtonAccept";

const ButtonContainer = styled.div`
margin-top:4%;
`

class FullLotInfoPage extends Component {
  render() {
    return (
        <div>
            <BasicCard>
            <ButtonContainer>
                <ButtonAccept title="Сделать ставку"/>
            </ButtonContainer>
            </BasicCard>
        </div>
    );
  }
}

export default FullLotInfoPage;
