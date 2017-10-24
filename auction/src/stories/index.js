import React from 'react';

import "../bootstrap.css";
import "../jquery.min.js";
import "../bootstrap.min.js";


import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import imageFile from '../Images/default.png';

import List from "../components/List";
import ButtonAccept from "../components/ButtonAccept";
import ButtonReject from "../components/ButtonReject";
import ButtonPrimary from "../components/ButtonPrimary";
import Header from "../components/Header";
import Form from "../components/Form";


const dataItemsForHeader = [
  {
    title :"Лоты",
    src: 12
  },
  {
    title: "Авторизация",
    src:123
  }
]

const dataItemsForForm = [
  {
    field :"Email",
    type: "email"
  },
  {
    field: "Password",
    type: "password"
  }
]


const dataItemsForList = [
  {
    text: "Information about lot 1",
    src: imageFile,
    time: "12:01:01"
  },
  {
    text: "Information about lot 2",
    src: imageFile,
    time: "11:59:01"
  }
]

storiesOf('List', module).add('defaultList', () => (<List data={dataItemsForList}></List>));
storiesOf('Buttons', module).add('ButtonAccept', () => (<ButtonAccept title="Add"></ButtonAccept>))
                            .add('ButtonReject', () => (<ButtonReject title="Delete"></ButtonReject>))
                            .add('ButtonPrimary', () => (<ButtonPrimary title="Ok"></ButtonPrimary>));
storiesOf('Header', module).add('Header', () => (<Header title = "Lot Site" text="lots" data = {dataItemsForHeader}></Header>));
storiesOf('Inputs', module).add('Form', () => (<Form data={dataItemsForForm} text="Login"></Form>));
                            