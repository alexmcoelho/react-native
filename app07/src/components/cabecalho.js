import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => (
    <View style={styles.topo}>
        <Text style={styles.txtTtulo}>Calculadora</Text>
    </View>
)

const styles = StyleSheet.create({
    topo: {
        backgroundColor: '#2196F3',
        padding: 10,
        alignItems: 'center'
    },
    txtTtulo: {
        fontSize: 25,
        color: '#FFF'
    }
});