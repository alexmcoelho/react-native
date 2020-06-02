/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

const estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
}


const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random()
  numeroAleatorio = Math.floor(numeroAleatorio * 5)

  //frases
  var frases = Array()
  frases[0] = 'Frase 1'
  frases[1] = 'Frase 2'
  frases[2] = 'Frase 3'
  frases[3] = 'Frase 4'
  frases[4] = 'Frase 5'

  var fraseEscolhida = frases[numeroAleatorio]
  Alert.alert(fraseEscolhida)
}

const App = () => {
  
  const { principal, botao, textoBotao } = estilos;

  return (
    <View style={ principal }>

      <Image source={ require('./imgs/logo.png') } />

      <TouchableOpacity 
        onPress={gerarNovaFrase}
        style={ botao }>
        <Text style={ textoBotao }>Nova frase</Text>
      </TouchableOpacity>

    </View>
  )
}

AppRegistry.registerComponent('app02', () => App);
