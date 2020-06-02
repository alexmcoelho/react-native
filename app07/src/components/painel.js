import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Entrada from './entrada';
import Operacao from './operacao';
import Comando from './comando';

const Painel = props => (
    <View>
        <Entrada 
            atualizaValor={props.atualizaValor}
            num1={props.num1} 
            num2={props.num2} 
        />
        <Operacao operacao={props.operacao} atualizaOperacao={props.atualizaOperacao} />
        <Comando acao={props.calcular} />
    </View>
)

export { Painel };