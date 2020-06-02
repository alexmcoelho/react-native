import React from 'react'
import { Text, View, Button, AppRegistry } from 'react-native'

const geraNumeroAleatorio = () => {
  var numeroAleatorio = Math.random()
  numeroAleatorio = Math.floor(numeroAleatorio * 10)
  alert(numeroAleatorio) 
}

const App = function(){
  return (
    <View>
      <Text>Gerador de números randômicos</Text>
      <Button 
        title="Gerar número randômico" 
        onPress={geraNumeroAleatorio}/>
    </View>
  )
}

AppRegistry.registerComponent('app01', () => { return App})