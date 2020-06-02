/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux'


const logo = require('../imgs/logo.png')
const botaoJogar = require('../imgs/botao_jogar.png')
const btnSobreJogo = require('../imgs/sobre_jogo.png')
const btnOutrosJogos = require('../imgs/outros_jogos.png')

export default class Principal extends Component {
  render() {
    return (
      <View style={styles.cenaPrincipal}>
        <View style={styles.apresentacaoJgo}>
          <Image source={logo} />

          <TouchableHighlight 
            onPress={() => { Actions.resultados() }}
          >
            <Image source={botaoJogar} />
          </TouchableHighlight>
        </View>

        <View style={styles.rodape}>
            <TouchableHighlight 
                onPress={() => { Actions.sobreJogo() }}
            >
                <Image source={btnSobreJogo} />
            </TouchableHighlight>
            <TouchableHighlight 
                onPress={() => { Actions.outrosJogos() }}
            >
                <Image source={btnOutrosJogos} />
            </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cenaPrincipal: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  apresentacaoJgo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }  
});