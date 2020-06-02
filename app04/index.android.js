/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListaItens from './src/components/ListaItens'

class app04 extends Component {
  render() {
    const teste = 'teste'
    console.log(teste)
    return (
      <ListaItens />
    );
  }
}

AppRegistry.registerComponent('app04', () => app04);
