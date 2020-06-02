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
  View,
  Button,
  Image
} from 'react-native';

import Topo from './src/components/topo'
import Icone from './src/components/icone'

class app03 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    }
  }

  jokenpo(escolhaUsuario) {
    //gera número aleatório (0, 1, 2)
    const numAleatorio = Math.floor(Math.random() * 3)
    let escolhaComputador = ''
    switch (numAleatorio) {
      case 0:
        escolhaComputador = 'pedra'
        break;
      case 1:
        escolhaComputador = 'papel'
        break;
      case 2:
        escolhaComputador = 'tesoura'
        break;
    
      default:
        break;
    }

    let resultado = ''
    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate'
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Você ganhou'
      }
      
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Você perdeu'
      }
    }

    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate'
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Você ganhou'
      }
      
      if(escolhaUsuario == 'pedra'){
        resultado = 'Você perdeu'
      }
    }

    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate'
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Você ganhou'
      }
      
      if(escolhaUsuario == 'papel'){
        resultado = 'Você perdeu'
      }
    }

    this.setState({escolhaUsuario, escolhaComputador, resultado})

  }

  render() {
    return (
      <View>

        <Topo />

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="pedra" onPress={() => { this.jokenpo('pedra') }}></Button> 
          </View>
          <View style={styles.btnEscolha}>
            <Button title="papel" onPress={() => { this.jokenpo('papel') }}></Button>
          </View>
          <View style={styles.btnEscolha}>
            <Button title="tesoura" onPress={() => { this.jokenpo('tesoura') }}></Button>
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador={'Computador'} />
          <Icone escolha={this.state.escolhaUsuario} jogador={'Você'} />
        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
})

AppRegistry.registerComponent('app03', () => app03);
