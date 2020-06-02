/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Rotas from './src/rotas'

export default class app06 extends Component {
  render() {
    return (
      <Rotas />
    );
  }
}

AppRegistry.registerComponent('app06', () => app06);
