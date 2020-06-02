/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import firebase from 'firebase'
import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text,
  View,
  Alert
} from 'react-native';

export default class firebaseTeste extends Component {

  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyAWZC6QBcXLK3T1refAn3rgq_0xOmXsuJM",
      authDomain: "configuracaofirebasereac-dd424.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-dd424.firebaseio.com",
      projectId: "configuracaofirebasereac-dd424",
      storageBucket: "configuracaofirebasereac-dd424.appspot.com",
      messagingSenderId: "62452240081",
      appId: "1:62452240081:web:0e78f3b7f19b6222e3bff0",
      measurementId: "G-HGDENDE4H0"
    };
    firebase.initializeApp(firebaseConfig)
  }

  cadastrarUsuario() {
    const email = 'alex@gmail.com';
    const senha = '123456Al!@#$%';
    
    const usuario = firebase.auth();
    usuario.createUserWithEmailAndPassword(email, senha)
    .catch(e => {
      let mensagem = ''
      if(e.code == 'auth/weak-password'){
        mensagem = 'A senha precisa ter no mínino 6 caracteres'
      }
      Alert.alert( mensagem )
    });
  }

  verificarUsuarioLogado() {
    const usuario = firebase.auth();
    
    usuario.onAuthStateChanged(
      usuarioAtual => {
        if(usuarioAtual){
          Alert.alert('Usuário está logado!')
        }
        else {
          Alert.alert('Usuário não está logado!')
        }    
      }
      )
    }
    
  deslogarUsuario() {
    const usuario = firebase.auth();
    usuario.signOut();
  }
    
  logarUsuario() {
    const usuario = firebase.auth();
    const email = 'alex@gmail.com';
    const senha = '123456Al!@#$%';

    usuario.signInWithEmailAndPassword(email, senha)
    .catch(e => {
      Alert.alert( e.message )
    });
  }

  render() {
    return (
      <View >
        <Button 
          onPress={() => { this.cadastrarUsuario(); }}
          title="Salvar dados"
          accessibilityLabel="Salvar dados"
        />
        <Button 
          onPress={() => { this.verificarUsuarioLogado(); }}
          title="Verificar"
          accessibilityLabel="Verificar"
        />
        <Button 
          onPress={() => { this.deslogarUsuario(); }}
          title="Deslogar"
          accessibilityLabel="Deslogar"
        />
        <Button 
          onPress={() => { this.logarUsuario(); }}
          title="Logar"
          accessibilityLabel="Logar"
        />
        <Text></Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => firebaseTeste);
