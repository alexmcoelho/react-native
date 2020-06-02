import React, { Component } from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheContatos = require('../imgs/detalhe_contato.png')

export default class CenaContatos extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar
          backgroundColor='#61BD8C'
        />
        <BarraNavegacao voltar navigator={this.props.navigator} 
          corDeFundo='#61BD8C' />

        <View style={styles.cabecalho}>
            <Image source={detalheContatos} />
            <Text style={styles.txtTitulo}>Contatos</Text>
        </View>

        <View style={styles.detalheContatos}>
            <Text style={styles.txtContatos}>(11) 1234-1234</Text>
            <Text style={styles.txtContatos}>(11) 12345-123</Text>
            <Text style={styles.txtContatos}>E-mail: alex@gmail.com</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25
    },
    detalheContatos: {
      marginTop: 20,
      padding: 20  
    },
    txtContatos: {
      fontSize: 18
    }
})