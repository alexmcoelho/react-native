import React from 'react';
import { View, StyleSheet } from 'react-native';

import Numero from './numero';

export default props => (
    <View style={styles.numeros}>
        <Numero num={props.num1} atualizaValor={props.atualizaValor} nome='num1' />
        <Numero num={props.num2} atualizaValor={props.atualizaValor} nome='num2' />
    </View>
)

const styles = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});