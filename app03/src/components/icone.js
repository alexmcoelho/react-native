import React, { Component } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

const imagemPedra = require('../../imgs/pedra.png')
const imagemPapel = require('../../imgs/papel.png')
const imagemTesoura = require('../../imgs/tesoura.png')

class Icone extends Component {
    render() {
        if (this.props.escolha == 'pedra') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imagemPedra} />
                </View>
            )
        }
        else if (this.props.escolha == 'papel') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imagemPapel} />
                </View>
            )
        }
        else if (this.props.escolha == 'tesoura') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imagemTesoura} />
                </View>
            )
        }
        return false
    }
}

const styles = StyleSheet.create({
    icone: {
        alignItems: 'center',
        marginBottom: 20,
    },
    txtJogador: {
        fontSize: 18
    }
})

export default Icone