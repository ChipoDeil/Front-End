import React, { Component } from 'react';
import List from '../../components/List';
import PropTypes from "prop-types";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import styled from "styled-components";

const Container = styled.div`
margin: 0 auto;
width: 50%;
margin-top: 5%;
`

class AuthPage extends Component {
  render() {
    return (
      <Container>
          <Form>
            <InputField/>
            <InputField field="password" type="password"/>
          </Form>
      </Container>
          
    );
  }
}

export default AuthPage;
